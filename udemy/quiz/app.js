const correctAns = ['B','B','B','B']
let formData = document.querySelector('.quiz-form')
let result = document.querySelector('.result')

formData.addEventListener('submit',(e)=>{
    e.preventDefault()
    let score = 0
    let output = 0
    let answers = [formData.q1.value,formData.q2.value,formData.q3.value,formData.q4.value]
    answers.forEach((element,index)=>{
        if(element === correctAns[index]){
            score += 1
        }
    })
    totalScore = score / correctAns.length * 100
    console.log(totalScore)
    scrollTo(0,0)
    result.classList.remove('d-none')
    let timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`
        if(totalScore === output){
            clearInterval(timer)
        }else{
            output ++
        }
    },10)
})