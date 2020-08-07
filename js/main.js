'use strict';

(function () {
  var MAX_PHOTO_QUANTITY = 25;

  var MIN_LIKES = 15;
  var MAX_LIKES = 200;

  var MIN_AVATAR_NUMBER = 1;
  var MAX_AVATAR_NUMBER = 6;

  var MAX_BIG_PHOTO_QUANTITY = 1;

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

  function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomArrayElement (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }


  var userPhotoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var picturesContainer = document.querySelector('.pictures');

  var smallPhoto = {
    avatar: "img/avatar-6.svg",
    message: "В целом всё неплохо. Но не всё.",
    name: "Артем"
  }

  function createPhotoArray () {
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

  function renderPhotoCollection (arr) {
    arr.forEach(function(item, i, arr) {
      picturesContainer.appendChild(item);
    });
  }

  renderPhotoCollection(createPhotoArray());


  var photoComment = document.querySelector('.social__comment');
  function createBigPhotoArray () {
    var bigPhotoArray = [];
    for (var i = 0; i < MAX_PHOTO_QUANTITY; i++) {
      var bigPhotoElement = bigPicture.cloneNode(true);

      bigPhotoElement.document.querySelector('.big-picture__img').src = 'img/avatar-1.svg';
      bigPhotoElement.document.querySelector('likes-count').textContent = getRandomNumber(MIN_LIKES, MAX_LIKES);
      bigPhotoElement.document.querySelector('.comments-count').textContent = getRandomNumber(MIN_LIKES, MAX_LIKES);
      bigPhotoElement.document.querySelector('.social__caption').textContent =
      bigPhotoElement.document.querySelector()

    }
  }



}) ();
