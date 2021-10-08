function main() {
    const textArea = document.querySelector('textarea');
    document.querySelector('#beautify').addEventListener('click', () => {
        textArea.value = html_beautify(textArea.value);
    });
    const rssFileEl = document.querySelector('#rss-file');
    document.querySelector('#open-file').addEventListener('click', () => {
        rssFileEl.click();
    });
    document.querySelector('#download').addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([textArea.value], {type: 'application/xml'}));
        a.download = 'rss.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
    document.querySelector('#reset').addEventListener('click', () => {
        localStorage.removeItem('rss');
        textArea.value = template;
    });
    document.querySelector('#rss-file').addEventListener('change', async () => { 
        const content = await rssFileEl.files[0].text();
        textArea.value = content;
        rssFileEl.value = '';
    });
    textArea.value = localStorage.getItem('rss') || template;
    document.querySelector('#add-files').addEventListener('click', () => { 
        addFilesClick(document.querySelector('#items-container')); 
    });
    document.querySelector('#remove-files').addEventListener('click', () => { 
        document.querySelector('#items-container').innerHTML = ''; 
    });

    const editor = CodeMirror.fromTextArea(textArea, {
      lineNumbers: true,
      mode:  'xml',
      lineWrapping: true,
    });
    document.querySelector('#nav-xml-tab').addEventListener('show.bs.tab', () => {
        syncParsedToXml(editor);
    });
    document.querySelector('#nav-parsed-tab').addEventListener('show.bs.tab', () => {
        syncXmlToParsed(editor);
    });
}

const FIELDS = [{
    text: 'Title',
    tag: 'title',
}, {
    text: 'Author',
    tag: 'itunes:author',
}, {
    text: 'Website',
    tag: 'link',
}, {
    text: 'Description',
    tag: 'description',
    type: 'textarea',
}, {
    text: 'One sentence description',
    tag: 'itunes:subtitle',
},{
    text: 'Podcast owner',
    tag: 'itunes:name',
}, {
    text: 'Podcast owner email',
    tag: 'itunes:email',
}, {
    text: 'Explicit?',
    tag: 'itunes:explicit',
    type: 'checkbox',
}, {
    text: 'Image',
    tag: 'itunes:image',
    attribute: 'href',
}, {
    text: 'Category',
    tag: 'itunes:category',
    attribute: 'text',
}];

function createInput(type, id, text, value) {
    const row = document.createElement('div');
    row.classList.add('mb-3', 'row');
    const label = document.createElement('label');
    label.classList.add('col-sm-2', 'col-form-label');
    label.textContent = text;
    label.for = id;
    const input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
    if (type === 'checkbox') {
        input.type = 'checkbox';
    }
    input.classList.add('col-sm-10');
    input.id = id;
    if (type === 'checkbox') {
        input.checked = value === 'yes';
    } else {
        input.value = value;
    }
    row.appendChild(label);
    row.appendChild(input);
    return row;
}

function renderField(container, rss, field) {
    const id = 'field-' + field.tag.replace(':', '-');
    const tag = rss.getElementsByTagName(field.tag)[0];
    const value = field.attribute ? tag.getAttribute(field.attribute) : tag.textContent;
    const row = createInput(field.type ?? 'text', id, field.text, value);
    row.querySelector(`#${id}`).dataset.tag = field.tag;
    container.appendChild(row);
}

function createIcon(icon) {
    const el = document.createElement('i');
    el.classList.add('bi', 'fs-1', icon);
    return el;
}

function renderItem(container, item) {
    const div = document.querySelector('#item-template').content.cloneNode(true).querySelector('.row');
    div.querySelector('.bi-arrow-up-square-fill').addEventListener('click', () => {
        if (div.previousSibling == null) return;
        div.previousSibling.insertAdjacentElement('beforebegin', div);
    });
    div.querySelector('.bi-arrow-down-square-fill').addEventListener('click', () => {
        if (div.nextSibling == null) return;
        div.nextSibling.insertAdjacentElement('afterend', div);
    });
    const fields = div.querySelector('.fields');
    fields.dataset.guid = item.guid;
    fields.dataset.duration = item.duration;
    fields.dataset.bytes = item.bytes;
    for (const field of ['title', 'url']) {
        const input = createInput('text', item.guid + field, field, item[field]);
        input.classList.add(field);
        fields.appendChild(input);
    }
    div.querySelector('.bi-trash-fill').addEventListener('click', () => {
        container.removeChild(div);
    });
    container.appendChild(div);
}

function extractItems(rss) {
    return Array.from(rss.getElementsByTagName('item')).map((tag) => {
        return {
            guid: tag.querySelector('guid').textContent,
            title: tag.querySelector('title').textContent,
            url: tag.querySelector('enclosure').getAttribute('url'),
            bytes: tag.querySelector('enclosure').getAttribute('length'),
            duration: tag.getElementsByTagName('itunes:duration')[0].textContent,
        };
    });
}

function formatDuration(duration) {
    const sec = Math.floor(duration % 60);
    duration = Math.floor(duration / 60);
    const min = duration % 60;
    const hours = Math.floor(duration / 60);
    const pad = (v) => v < 10 ? '0' + v : String(v);
    return pad(hours) + ':' + pad(min) + ':' + pad(sec); 
}

async function getDurationOfFile(file) {
    const key = `cached_duration_${file.name}_${file.size}`;
    if (localStorage.getItem(key) != null) {
        return Number(localStorage.getItem(key));
    }
    const data = await file.arrayBuffer();
    const duration = (await new AudioContext().decodeAudioData(data)).duration;
    localStorage.setItem(key, duration);
    return duration;
}

function addFilesClick(itemsContainer) {
    const fileElement = document.querySelector('#audio-files');
    const changed = async () => { 
        const items = [];
        const fileProgress = document.querySelector('#file-progress');
        fileProgress.parentElement.classList.remove('invisible');
        fileProgress.style.width = '5%';
        const fileCount = fileElement.files.length;
        fileProgress.textContent = `0/${fileCount} files processed`;
        for (let i = 0; i < fileCount; i++) {
            const file = fileElement.files[i];
            console.log(file.name);
            const duration = await getDurationOfFile(file);
            const title = file.name.substring(0, file.name.lastIndexOf('.'));
            items.push({
                guid: title,
                title: title,
                url: file.name,
                bytes: file.size,
                duration: formatDuration(duration),
            });
            fileProgress.style.width = `${(i+1)*100/fileCount}%`;
            fileProgress.textContent = `${i+1}/${fileCount} files processed`;
        }
        items.sort((a, b) => {
            a = /\d+/.exec(a.title)?.[0] ?? '0';
            b = /\d+/.exec(b.title)?.[0] ?? '0';
            return Number(a) - Number(b);
        });
        for (const item of items) {
            renderItem(itemsContainer, item);
        }
        fileElement.value = '';
        fileElement.removeEventListener('change', changed);
        fileProgress.parentElement.classList.add('invisible');
    }
    fileElement.addEventListener('change', changed);
    fileElement.click();
}

function syncXmlToParsed(editor) {
    const xml = editor.getValue();
    const rss = new DOMParser().parseFromString(xml, "application/xml");

    const fieldsContainer = document.querySelector('#fields-container');
    fieldsContainer.innerHTML = '';
    for (const field of FIELDS) {
        renderField(fieldsContainer, rss, field);
    }
    const items = extractItems(rss);
    const filePrefix = items.length === 0 ? '' : items[0].url.substring(0, items[0].url.lastIndexOf('/') + 1);
    fieldsContainer.appendChild(createInput('text', 'file-prefix', 'Audio files prefix', filePrefix));

    const itemsContainer = document.querySelector('#items-container');
    itemsContainer.innerHTML = '';
    for (const item of items) {
        item.url = item.url.substring(filePrefix.length);
        renderItem(itemsContainer, item);
    }
}

function syncParsedToXml(editor) {
    const xml = editor.getValue();
    const rss = new DOMParser().parseFromString(xml, "application/xml");
    for (const childNode of Array.from(rss.querySelector('channel').childNodes)) {
        if (childNode.nodeType === 3) {
            childNode.parentElement.removeChild(childNode);
        }
    }
    for (const field of FIELDS) {
        const id = 'field-' + field.tag.replace(':', '-');
        const tag = rss.getElementsByTagName(field.tag)[0];
        const value = field.type === 'checkbox' ? (document.getElementById(id).checked ? 'yes' : 'no') : document.getElementById(id).value;
        if (field.attribute) {
            tag.setAttribute(field.attribute, value);
        } else {
            tag.textContent = value;
        }
    }
    rss.querySelector('pubDate').textContent = new Date().toGMTString();
    rss.querySelector('lastBuildDate').textContent = new Date().toGMTString();
    // Fill <image>
    rss.querySelector('image url').textContent = rss.getElementsByTagName('itunes:image')[0].getAttribute('href');
    rss.querySelector('image title').textContent = rss.querySelector('title').textContent;
    rss.querySelector('image link').textContent = rss.querySelector('link').textContent;
    rss.getElementsByTagName('itunes:summary')[0].textContent = rss.querySelector('description').textContent;
    for (const item of Array.from(rss.querySelectorAll('item'))) {
        item.parentElement.removeChild(item);
    }
    const items = Array.from(document.querySelectorAll('#items-container .item'));
    const filePrefix = document.querySelector('#file-prefix').value;
    const baseTime = Date.now();
    const oneDay = 1000 * 60 * 60 * 24;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const fields = item.querySelector('.fields');
        const xmlItem = document.createElement('item');
        const guid = document.createElement('guid');
        guid.setAttribute('isPermalink', 'false');
        guid.textContent = fields.dataset.guid;
        xmlItem.appendChild(guid);
        const title = document.createElement('title');
        title.textContent = fields.querySelector('.title input').value;
        xmlItem.appendChild(title);
        const enclosure = document.createElement('enclosure');
        enclosure.setAttribute('type', 'audio/mpeg');
        enclosure.setAttribute('url', filePrefix + fields.querySelector('.url input').value);
        enclosure.setAttribute('length', fields.dataset.bytes);
        xmlItem.appendChild(enclosure);
        const episode = document.createElement('itunes:episode');
        episode.textContent = i + 1;
        xmlItem.appendChild(episode);
        const duration = document.createElement('itunes:duration');
        duration.textContent = fields.dataset.duration;
        xmlItem.appendChild(duration);
        const pubDate = document.createElement('pubDate');
        pubDate.textContent = new Date(baseTime - (items.length - i + 1) * oneDay).toGMTString();
        xmlItem.appendChild(pubDate);
        rss.querySelector('channel').appendChild(xmlItem);
    }

    const value = html_beautify(new XMLSerializer().serializeToString(rss))
        .replaceAll(' xmlns="http://www.w3.org/1999/xhtml"', '')
        .replaceAll('ispermalink=', 'isPermalink=')
        .replaceAll('pubdate>', 'pubDate>');
    editor.setValue(value);
    setTimeout(function() {
        editor.refresh();
    }, 300);
    localStorage.setItem('rss', value);
}

window.addEventListener('load', () => { main(); });


var template = `<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>Сем камянёў</title>
        <link>http://shein.by</link>
        <pubDate>Wed, 14 Jul 2021 04:33:26 GMT</pubDate>
        <lastBuildDate>14 Jul 2021 04:33:26 +0000</lastBuildDate>
        <ttl>60</ttl>
        <language>be</language>
        <copyright>All rights reserved</copyright>
        <description>Таямніцу Сямі Камянёў можа раскрыць толькі адзін – той, каго старажытныя летапісы называюць Дастойным. Хлопец Ясь, які апынуўся ў дзівоснай краіне Эферыі, спрабуе разгадаць схаваную ў вяках загадку крышталяў, каб выратаваць жыццё сваёй сяброўкі і вызваліць Эферыю ад прыгнёту злога самазванца.</description>
        <itunes:subtitle>Таямніцу Сямі Камянёў можа раскрыць толькі адзін – той, каго старажытныя летапісы называюць Дастойным.</itunes:subtitle>
        <itunes:summary></itunes:summary>
        <itunes:type>serial</itunes:type>
        <itunes:owner>
            <itunes:name>Аляксей Шеін</itunes:name>
            <itunes:email>7stones.audiobook@gmail.com</itunes:email>
        </itunes:owner>
        <itunes:author>Аляксей Шеін</itunes:author>
        <itunes:explicit>no</itunes:explicit>
        <itunes:image href="https://storage.googleapis.com/sem_kamjanjou/art2.jpg" />
        <itunes:complete>yes</itunes:complete>
        <image>
            <url>https://storage.googleapis.com/sem_kamjanjou/art2.jpg</url>
            <title>Сем камянёў</title>
            <link>http://shein.by</link>
        </image>
        <itunes:category text="Fiction" />
        <item>
            <guid isPermalink="false">glava1</guid>
            <title>Глава 1</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/001_1.mp3" length="30538817" />
            <itunes:episode>1</itunes:episode>
            <itunes:duration>00:12:42</itunes:duration>
            <pubDate>Tue, 01 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava2</guid>
            <title>Глава 2</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/002.mp3" length="24739840" />
            <itunes:episode>2</itunes:episode>
            <itunes:duration>00:25:44</itunes:duration>
            <pubDate>Wed, 02 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava3</guid>
            <title>Глава 3</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/003.mp3" length="25399296" />
            <itunes:episode>3</itunes:episode>
            <itunes:duration>00:26:25</itunes:duration>
            <pubDate>Thu, 03 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava4</guid>
            <title>Глава 4</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/004.mp3" length="21291008" />
            <itunes:episode>4</itunes:episode>
            <itunes:duration>00:22:08</itunes:duration>
            <pubDate>Fri, 04 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava5</guid>
            <title>Глава 5</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/005.mp3" length="24334336" />
            <itunes:episode>5</itunes:episode>
            <itunes:duration>00:25:19</itunes:duration>
            <pubDate>Sat, 05 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava6</guid>
            <title>Глава 6</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/006.mp3" length="25063424" />
            <itunes:episode>6</itunes:episode>
            <itunes:duration>00:26:04</itunes:duration>
            <pubDate>Sun, 06 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava7</guid>
            <title>Глава 7</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/007.mp3" length="22650880" />
            <itunes:episode>7</itunes:episode>
            <itunes:duration>00:23:33</itunes:duration>
            <pubDate>Mon, 07 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava8</guid>
            <title>Глава 8</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/008.mp3" length="24256512" />
            <itunes:episode>8</itunes:episode>
            <itunes:duration>00:25:14</itunes:duration>
            <pubDate>Tue, 08 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava9</guid>
            <title>Глава 9</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/009.mp3" length="21606400" />
            <itunes:episode>9</itunes:episode>
            <itunes:duration>00:22:28</itunes:duration>
            <pubDate>Wed, 09 Jun 2021 00:00:00 GMT</pubDate>
        </item>
        <item>
            <guid isPermalink="false">glava10</guid>
            <title>Глава 10</title>
            <enclosure type="audio/mpeg" url="http://www.podtrac.com/pts/redirect.mp3/storage.googleapis.com/sem_kamjanjou/010.mp3" length="36755456" />
            <itunes:episode>10</itunes:episode>
            <itunes:duration>00:38:15</itunes:duration>
            <pubDate>Thu, 10 Jun 2021 00:00:00 GMT</pubDate>
        </item>
    </channel>
</rss>`;