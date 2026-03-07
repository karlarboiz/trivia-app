import QuizSettings from "../../components/QuizSettings/QuizSettings";

export default function QuizPageMC(){
    const totalItems =  2;
    const topics = ["hello"];
    const difficulty = "hard";
    const timer = 5;
    return <section>
       <QuizSettings totalItems={totalItems} topics={topics} difficulty={difficulty} timer={timer} />
        <h1>The Quiz Page starts here</h1>
    </section>
}