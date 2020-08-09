//'use strict';

(function () {
  const MAX_PHOTO_QUANTITY = 25;

  const MIN_LIKES = 15;
  const MAX_LIKES = 200;

  const MIN_AVATAR_NUMBER = 1;
  const MAX_AVATAR_NUMBER = 6;

  const MAX_BIG_PHOTO_QUANTITY = 1;

  const ESC_KEY_CODE = 27;
  const ENTER_KEY_CODE = 13;

  var bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');

  var messages = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
  ];

  var names = [
    'Вася',
    'Ваня',
    'Петя',
    'Таня',
    'Кристи',
    'Аня'
  ];

  var descriptions = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ]

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  getRandomArrayElement = (arr) => {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };


  var userPhotoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var picturesContainer = document.querySelector('.pictures');

  var smallPhoto = {
    avatar: "img/avatar-6.svg",
    message: "В целом всё неплохо. Но не всё.",
    name: "Артем"
  };

  createPhotoArray = () => {
    var photoArray = [];
    for (var i = 0; i < MAX_PHOTO_QUANTITY; i++) {
      var photoElement = userPhotoTemplate.cloneNode(true);

      photoElement.querySelector('.picture__img').src = 'photos/' + (i + 1) + '.jpg';
      //photoElement.querySelector('.picture__comments').textContent = getRandomArrayElement(messages);
      photoElement.querySelector('.picture__comments').textContent = getRandomNumber(MIN_LIKES, MAX_LIKES)
      photoElement.querySelector('.picture__likes').textContent = getRandomNumber(MIN_LIKES, MAX_LIKES);

      photoArray.push(photoElement);
    }
    return photoArray;
  }

  renderPhotoCollection = (arr) => {
    arr.forEach(function(item, i, arr) {
      picturesContainer.appendChild(item);
    });
  };

  renderPhotoCollection(createPhotoArray());




  var bitPictureCloseButton = document.querySelector('.big-picture__cancel');
  closeBigPicture = () => {
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onBigPictureEscPress);
    bitPictureCloseButton.removeEventListener('click', onClickCloseBigPicture);
  };


  onBigPictureEscPress = (evt) => {
    if (evt.keyCode === ESC_KEY_CODE) {
      closeBigPicture();
    }
  };

  onClickCloseBigPicture = () => {
    closeBigPicture();
  };


  if (!bigPicture.classList.contains('hidden')) {
    document.addEventListener('keydown', onBigPictureEscPress);
    bitPictureCloseButton.addEventListener('click', onClickCloseBigPicture);
  }


  var photoComment = document.querySelector('.social__comment');
  createBigPhotoArray = () => {
    var bigPhotoArray = [];
    for (var i = 0; i < MAX_PHOTO_QUANTITY; i++) {
      var bigPhotoElement = bigPicture.cloneNode(true);

      bigPhotoElement.document.querySelector('.big-picture__img').src = 'img/avatar-1.svg';
      bigPhotoElement.document.querySelector('likes-count').textContent = getRandomNumber(MIN_LIKES, MAX_LIKES);
      bigPhotoElement.document.querySelector('.comments-count').textContent = getRandomNumber(MIN_LIKES, MAX_LIKES);
      bigPhotoElement.querySelector('.social__caption').textContent = getRandomArrayElement(descriptions);

    }
  };

  var inputUploadFile = document.querySelector('.img-upload__input');
  var imgUploadOverlay = document.querySelector('.img-upload__overlay');
  var pageBody = document.querySelector('body');
  var imgUploadCancelButton = document.querySelector('.img-upload__cancel');
  onUploadChange = () => {
    pageBody.classList.add('modal-open');
    imgUploadOverlay.classList.remove('hidden');
    inputUploadFile.removeEventListener('change', onUploadChange);
  };

  inputUploadFile.addEventListener('change', onUploadChange);

  cancelUpload = () => {
    pageBody.classList.remove('modal-open');
    imgUploadOverlay.classList.add('hidden');
    inputUploadFile.removeEventListener('click', onUploadCancelClick);
    document.removeEventListener('keydown', onUploadCancelKeydown);
  };


  onUploadCancelClick = () => {
    cancelUpload();
  };

  onUploadCancelKeydown = (evt) => {
    if (evt.keyCode === ESC_KEY_CODE) {
      cancelUpload();
    }
  };



  if (imgUploadOverlay.classList.contains('hidden')) {
    imgUploadCancelButton.addEventListener('click', onUploadCancelClick);
    document.addEventListener('keydown', onUploadCancelKeydown);
  }







  var inputUploadPhotoDescription = document.querySelector('.text__description');

  inputUploadPhotoDescription.setAttribute('max', 140);

  var inputHashtags = document.querySelector('.text__hashtags');
  var inputHashtagsValue = inputHashtags.value;


  inputHashtags.addEventListener('input', function () {
    console.log(inputHashtags.value);
  });










  let m;
  const regex = /^#[a-zA-Zа-яА-Я\d]{0,19}$/g;
  var str = ``;

  //inputHashtags.value


  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      console.log(`Found match, group ${groupIndex}: ${match}`);
    });
  }

}) ();
