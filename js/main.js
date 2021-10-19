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
];

window.addEventListener('load', () => {
  speakers.forEach((e) => {
    const element = document.createElement('future-speakers');
    element.innerHTML = `
        <div class="speakers">
        <div class="speaker-img">
            <img src="${e.image1}" alt="">
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