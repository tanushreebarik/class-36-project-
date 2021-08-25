class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter The correct option");

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("what starts and ends with the letter E but has only one letter?");
    this.option1.html("1.everyone");
    this.option2.html("2.envelope");
    this.option3.html("3.estimate");
    this.option4.html("4.example");

    this.question.position(50,50);
    this.option1.position(60,80);
    this.option2.position(60,100);
    this.option3.position(60,120);
    this.option4.position(60,140);


    this.input2.position(400,230);
    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      



      
    })


  }
}
