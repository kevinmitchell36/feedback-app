import PropTypes from "prop-types" 
import FeedbackItem from './FeedbackItem'
import { AnimatePresence, motion } from "motion/react"
function FeedbackList({feedback, handleDelete}) {
  if(!feedback || feedback.lenght === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <div className='feedback-list'>
      
      {feedback.map( (item) => (
        <AnimatePresence>
        <motion.div 
          key={item.id}
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0}}
          >
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        </motion.div>
      </AnimatePresence>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList
