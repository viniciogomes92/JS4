let friends = [];
let nameInput = document.getElementById('friend');
let friendsList = document.getElementById('friendsList');
let result = document.getElementById('result');
let erro = document.getElementById('error');
const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'´`^~]+(?: [A-Za-zÀ-ÖØ-öø-ÿ'´`^~]+)*$/;

function addFriend () {
  clearError();

  if (!nameInput.value == '' && nomeRegex.test(nameInput.value)) {
    if (!friends.includes(nameInput.value)) {
      friends.push(nameInput.value);
      listFriends();

    } else {
      erro.innerHTML = 'Amigo já consta na lista.';
    }
    clearInput();
    clearResult();
  } else {
    isEmpty();
    clearResult();
  }
}

function listFriends() {
  clearList();

  for (i = 0; i < friends.length; i++) {
    let newFriend = document.createElement('li');
    newFriend.innerText = friends[i];
    friendsList.appendChild(newFriend);
  }
}

function drawingFriend() {
  let drawNumber = parseInt(Math.random() * friends.length);

  clearError();
  clearInput();

  if (!friends.length == 0) {
    result.innerHTML = friends[drawNumber];
  } else {
    erro.innerHTML = 'Lista não possui amigos para sortear.'
  }
  
}

function isEmpty() {
  erro.innerHTML = 'Favor informar um nome.';
}

function clearInput() {
  nameInput.value = '';
}

function clearError() {
  erro.innerHTML = '';
}

function clearList() {
  friendsList.innerHTML = '';
}

function clearResult() {
  result.innerHTML = '';
}