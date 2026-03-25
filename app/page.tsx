'use client'
import ButtonComponent from '@/components/ui/ButtonComponent'


const Home = () => {
  return (
    <div>
      <ButtonComponent
        label="Click Me"
        onClick={() => alert('Button clicked!')}
      />
    </div>
  )
}

export default Home