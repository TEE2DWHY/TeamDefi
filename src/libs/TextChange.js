import { Typewriter } from 'react-simple-typewriter'

const TextChange = () =>{
    <Typewriter
        words={['Tech', 'Web3', 'UI/UX', 'Frontend', 'BackEnd']}
        loop={5}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
    />
}

export default TextChange