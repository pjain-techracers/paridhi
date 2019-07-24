const $form = $('body');
const $submitActors = $form.find('input[type=submit]');
const widget = document.createElement('section'); // is a node
let contentIndex = 0; //to change content of pop ups
let customize = {
  supportedCards: ['pageVisit', 'totalSigned', 'liveNowModal'],
  appearFrom: 'topRight',
  initialCard: 'pageVisit',
  direction: 'up',
  modalHTML: {
    liveNowModal: {
      image: 'http://chittagongit.com//images/about-us-icon/about-us-icon-7.jpg',
      msg: `<b class='count'> ${count = 0} </b> people  are visiting this page right now. <br>`,
    },
    pageVisit: {
      image: 'http://chittagongit.com//images/icon-for-fire/icon-for-fire-23.jpg',
      msg: `<b class='count'> ${count = 0} </b>has visited this site. <br>`,
    },
    totalSigned: {
      image: 'http://chittagongit.com//images/launchpad-icon/launchpad-icon-16.jpg',
      msg: `<b> ${totalSigned = 0}</b> have signed up this page.</br>`,
    },
  }
}

const getInnerHTML = (modal) => {
  return getModalHTML(customize.modalHTML[modal])
}

const getModalHTML = (customData = {}) => `
  <div class="custom-notification-image-wrapper">
    <img src="${customData.image}">
  </div>
  <div class="custom-notification-content-wrapper">
    <p class="custom-notification-content">
      ${customData.msg} <strong class="verify"><img src='check-circle.png'> verified by Enkode </strong>
    </p>
  </div>`;

const positions = {
  topLeft: {
    'top': '20px',
    'left': '20px',
  },
  topRight: {
    'top': '20px',
    'right': '20px',
  },
  bottomRight: {
    'bottom': '20px',
    'right': '20px',
  },
  bottomLeft: {
    'bottom': '20px',
    'left': '20px',
  }
}

const changePosition = (position) => {
  return $('.custom-social-proof').css(positions[position]);
}

const addWidget = (res) => {
  customize = !res ? customize : res;
  widget.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/index.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <section id="social_proof" class="custom-social-proof">
      <div class="custom-notification">
        <div class="custom-notification-container">
          ${getInnerHTML(customize.initialCard)}
        </div>
        <div class="custom-close"><i class="fa fa-times-circle-o"></i>
        </div>
      </div>
    </section>
  `;
  $form.append(widget);
  changePosition(customize.appearFrom);
}

const getBackendData = () => {
  return $.ajax({
    dataType: 'json',
    url: 'http://localhost:5000/customize/deffgbtr',
    crossDomain: true,
    success: addWidget,
    fail: addWidget(customize),
  });
}

$(() => {
  getBackendData();

  setInterval(function() {
    $(".custom-social-proof").stop().toggle('slide', { direction: customize.direction || 'down' }, function() {
      if ($(this).is(':hidden')) {
        contentIndex++;
        contentIndex = contentIndex === customize.supportedCards.length ? 0 : contentIndex;
        $(".custom-notification-container").html(getInnerHTML(customize.supportedCards[contentIndex]));
      }
    })
  }, 200000);

  $(".custom-close").click(() => {
    $(".custom-social-proof").stop().slideToggle('slow');
  });

  $submitActors.click((event) => {
     event.preventDefault();
     totalSigned = totalSigned + 1;
     $(".custom-notification-container" ).html(getInnerHTML('totalSigned')).delay(5000);
  });
})
