const moduleBars = document.querySelector('#mobile-menu');
const moduleOverlay = document.querySelector('.mobile-module-overlay');
const moduleMenu = document.querySelector('.desktop-module-nav');
const moduleMenuTimes = document.querySelector('.modal-1');

moduleBars.addEventListener('click', () => {
  moduleOverlay.style.display = 'block';
  moduleMenu.style.display = 'block';
});
moduleMenuTimes.addEventListener('click', () => {
  moduleOverlay.style.display = 'none';
  moduleMenu.style.display = 'none';
});
moduleOverlay.addEventListener('click', () => {
  moduleOverlay.style.display = 'none';
  moduleMenu.style.display = 'none';
});

const speakers = [
  {
    id: 'speaker-1',
    image1: './img/speaker-2.jpg',
    names: 'Serkan Şehvelioğlu',
    jobs: 'Php,mysql Software Developer in Muğla',
    paragraph: 'Serkan Şehvelioğlu he have master degree and six years have experiment',
  },
  {
    id: 'speaker-2',
    image1: './img/speaker-1.jpg',
    names: 'Berkay Dörtkardeş',
    jobs: 'Php,mysql Software Developer in Muğla',
    paragraph: 'Berkay Dörtkardeş he have master degree and six years have experiment',

  },
  {
    id: 'speaker-2',
    image1: './img/speaker-1.jpg',
    names: 'Berkay Dörtkardeş',
    jobs: 'Php,mysql Software Developer in Muğla',
    paragraph: 'Berkay Dörtkardeş he have master degree and six years have experiment',

  },
  {
    id: 'speaker-1',
    image1: './img/speaker-2.jpg',
    names: 'Serkan Şehvelioğlu',
    jobs: 'Php,mysql Software Developer in Muğla',
    paragraph: 'Serkan Şehvelioğlu he have master degree and six years have experiment',
  },
  {
    id: 'speaker-1',
    image1: './img/speaker-2.jpg',
    names: 'Serkan Şehvelioğlu',
    jobs: 'Php,mysql Software Developer in Muğla',
    paragraph: 'Serkan Şehvelioğlu he have master degree and six years have experiment',
  },
  {
    id: 'speaker-1',
    image1: './img/speaker-1.jpg',
    names: 'Serkan Şehvelioğlu',
    jobs: 'Php,mysql Software Developer in Muğla',
    paragraph: 'Serkan Şehvelioğlu he have master degree and six years have experiment',
  },
];

window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    for (let index = 0; index < speakers.length; index += 1) {
      if (index === 2) {
        break;
      } else {
        const element = document.createElement('future-speakers');
        element.innerHTML = `
            <div class="speakers">
            <div class="speaker-img">
                <img src="${speakers[index].image1}" alt="${speakers[index].names}">
            </div>
            <div class="speakers-text">
                <h5>${speakers[index].names}</h5>
                <h6>${speakers[index].jobs}</h6>
                <p>${speakers[index].paragraph}</p>
            </div>
            
        </div>`;
        document.querySelector('.program-speakers').appendChild(element);
      }
    }
  } else {
    speakers.forEach((e) => {
      const element = document.createElement('future-speakers');
      element.innerHTML = `
          <div class="speakers">
          <div class="speaker-img">
              <img src="${e.image1}" alt="${e.names}">
          </div>
          <div class="speakers-text">
              <h5>${e.names}</h5>
              <h6>${e.jobs}</h6>
              <p>${e.paragraph}</p>
          </div>
          
      </div>`;
      document.querySelector('.program-speakers').appendChild(element);
    });
  }
});

const loadMore = document.querySelector('#loadMore');

loadMore.addEventListener('click', () => {
  document.querySelector('.program-speakers').innerHTML = '';

  speakers.forEach((e) => {
    window.scrollBy(0, window.innerHeight / 2);

    const element = document.createElement('future-speakers');
    element.innerHTML = `
        <div class="speakers">
        <div class="speaker-img">
            <img src="${e.image1}" alt="${e.names}">
        </div>
        <div class="speakers-text">
            <h5>${e.names}</h5>
            <h6>${e.jobs}</h6>
            <p>${e.paragraph}</p>
        </div>
        
    </div>`;
    document.querySelector('.program-speakers').appendChild(element);
  });
});
