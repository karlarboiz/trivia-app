import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import QuizPageMC from "../pages/QuizPageMC/QuizPageMC";
import StartQuiz from "../pages/StartQuiz/StartQuiz";
export const router = [
     {
    path: "/",
    element: <Layout />,
    errorElement:<Error />,
    children: [
      {
        index: true,
        element: <Home />
      },{
        path: "start-quiz",
        element: <StartQuiz/>
      },{
        path: "about",
        element: <About/>
      },{
        path: "quiz-page/multiple-choice",
        element: <QuizPageMC/>
      }
    ],
  },
]