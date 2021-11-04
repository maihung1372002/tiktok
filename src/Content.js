import { useEffect } from "react";
import { useState } from "react";
const listItems = ['react', 'node', 'html, css'];

const Content = () => {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        function handleLesson(e) {
            console.log(e.detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleLesson)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleLesson)
        }  
    }, [lessonId]);
    
    return (
        <div>
            <ul>
                {listItems.map((listItem, index) => 
                    <li 
                    key={index + 1}
                    style={{color: lessonId === index + 1 ? 'red' : '#333' }}
                    onClick={() => setLessonId(index + 1)}
                    >{listItem}</li>
                )}
            </ul>
 
        </div>
        
    )
}

export default Content;
