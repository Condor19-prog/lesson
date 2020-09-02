import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {AccordionSecret} from "./components/Accordion/AccordionSecret";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App(props:any) {
  console.log("App rendering")

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (


      <div className={"App"}>
        {/*<OnOff />*/}
        <Rating value={ratingValue}
                onClick={setRatingValue}/>
        {/*<UncontrolledAccordion titleValue={"Menu"} collapsed={false}/>*/}

        {/*<UncontrolledRating />*/}

        {/*<Accordion titleValue={"Menu"}*/}
        {/*           collapsed={accordionCollapsed}*/}
        {/*           onChange={ () => {setAccordionCollapsed(!accordionCollapsed)} }*/}
        {/*/>*/}
        {/*<OnOff on={switchOn} onChange={ setSwitchOn } />*/}
        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


        {/*<UncontrolledRating value={0} />*/}
        {/*<UncontrolledRating value={1} />*/}
        {/*<UncontrolledRating value={2} />*/}
        {/*<UncontrolledRating value={3} />*/}
        {/*<UncontrolledRating value={4} />*/}
        {/*<UncontrolledRating value={5} />*/}
      </div>
  );
}

type PageTitleProps = {
  title: string
}

function PageTitle(props: PageTitleProps) {
  console.log("PageTitle render")
  return <h1>{ props.title }</h1>
}






export default App;
