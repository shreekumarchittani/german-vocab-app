import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import Input from './Components/Input';
import { useEffect, useState } from 'react';

function App() {
  const [maleVocab, setMaleVocab] = useState([]);
  const [femaleVocab, setfemaleVocab] = useState([]);
  const [neutrVocab, setNeutrVocab] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("malevocab") == null) {
      localStorage.setItem("malevocab", JSON.stringify(maleVocab));
    }
    if (localStorage.getItem("femaleVocab") == null) {
      localStorage.setItem("femaleVocab", JSON.stringify(femaleVocab));
    }
    if (localStorage.getItem("neutrVocab") == null) {
      localStorage.setItem("neutrVocab", JSON.stringify(neutrVocab));
    }
    setMaleVocab(JSON.parse(localStorage.getItem("malevocab")));
    setfemaleVocab(JSON.parse(localStorage.getItem("femaleVocab")));
    setNeutrVocab(JSON.parse(localStorage.getItem("neutrVocab")));
  },[])

  const onAddHandler = (voc) => {
    if (voc.gender.toLowerCase() === 'der') {
      setMaleVocab(prevmalevocab => {
        localStorage.setItem("malevocab",JSON.stringify([...JSON.parse(localStorage.getItem("malevocab")), voc]));
        return [...prevmalevocab, voc];
      })
    } else if (voc.gender.toLowerCase() === 'das') {
      setfemaleVocab(prevfemalevocab => {
        localStorage.setItem("femaleVocab",JSON.stringify([...JSON.parse(localStorage.getItem("femaleVocab")), voc]));
        return [...prevfemalevocab, voc];
      })
    } else if (voc.gender.toLowerCase() === 'die') {
      setNeutrVocab(prevneutrvocab => {
        localStorage.setItem("neutrVocab",JSON.stringify([...JSON.parse(localStorage.getItem("neutrVocab")), voc]));
        return [...prevneutrvocab, voc];
      })
    }
  }
  return (
    <div>
      <Input onAdd = {onAddHandler}/>
      <div className="table-div">
        <Table vocab={maleVocab} article="Der"/>
        <Table vocab={femaleVocab} article="Das"/>
        <Table vocab={neutrVocab} article="Die"/>
      </div>

    </div>
  );
}

export default App;
