import './App.css'
import assignmentphoto from './assignmentphoto.JPG'

function Introduction (props) {
  return (
    <div>
      <h2> {props.name} </h2>
      <p> {props.bio} </p>
    </div>
  );
}

function Skills (props) {
  return (
    <div>
      <h2> My {props.name}</h2>
      <p> {props.skills} </p>
    </div>
  );
}
function Interests (props) {
  return (
    <div>
      <h2> My {props.name}</h2>
      <p> {props.interests}</p>
    </div>
  );
}
function App(){
  return (
    <div >
      <h1> My Bio Page</h1>
      <img
      src= {assignmentphoto}
      alt= "Assignment photo"
      width="250"
      />

      <Introduction 
      name = " Hii, my name is Gakenia Nkukuu."
      bio = " Welcome to my bio page that gives you some insight on me. I am an undergraduate medical student wanting to pursue more of the technical aspects of the world which is why I am learning how to code. I believe the integration of medicine and technology is indeed the future. "
      />
      < Introduction 
      name = " About Me"
      bio = " As of now, I am in my second year and I am trying to branch out of the medicine bubble as much as possible.
              I believe in having a rounded approach like incorporating some physical activity into the daily routine so I usually go to the gym.
              Music to me is a language that can sometimes say more words than I can myself."
      />
      < Skills 
      name= " Technical skills"
      skills= " Coding including : HTML, CSS, Javascript, Figuring out complex maths problems and Search engine optimization."
      />
      <Skills 
      name= "Personal skills"
      skills= " I would say that I am observant and pair this with active listening as I like knowing more, empathetic, collaborative and persuausive."
      />
      < Interests
      name =" Interests"
      interests= " Swimming, swimming, weightlifting, coding, golf and learing more about people"
      />
      <h2> How to reach me:</h2>
      <p>  My email is gakeniankukuu@gmail </p>
    </div>
  );
}

export default App
