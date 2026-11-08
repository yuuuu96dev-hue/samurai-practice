// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn')

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました！')
})

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn')
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list')

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
  // li要素を新しく作成する
  const childList = document.createElement('li')

  childList.textContent = 'これはリスト要素です'

  parentList.appendChild(childList)
})

const countBtn = document.getElementById('count-btn')

countBtn.addEventListener('click', () => {
  const text = document.forms.textForm.textBox.value
  console.log(text.length + '文字')
})

const areaBtn = document.getElementById('area-btn')

areaBtn.addEventListener('click', () => {
  const area = document.forms.areaForm.area.value
  console.log(area)
})

const osBtn = document.getElementById('os-btn')

osBtn.addEventListener('click', () => {
  const items = document.forms.osForm.os

  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value)
    }
  }
})