import '../styles/person.css'


function Person({ id, setActiveId, activeId }) {

	return (
		<div className="msg-area flex">
			<div onClick={() => setActiveId(id)} className="contacts flex">
				<p>I am person #{id}!</p>	
			</div>
		</div>
		)
}

export default Person