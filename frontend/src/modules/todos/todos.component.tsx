import React, {use, useState} from 'react';
import Button from '../../shared/components/button/button.component';
import { TodoForm } from './addform.component';
import * as styles from "./todos.styles"
import {Drawer} from "@blueprintjs/core"


function TodoApp() {
	const [isAddToDoMenuOpen, setIsAddToDoMenuOpen] = useState(false)

	return (
		<>
		<header>

				<div className='operationsMenu' style={ styles.operationsMenu}>
						<Button label="Todos"/>

						<Button label="Search" />


							<ul className='filterOperations' style={ styles.filterOperations}>
								<li><Button label="Activated" /></li>
								<li><Button label="Deactivated" /></li>
							</ul>
			


	
						<Button label="Add Todo" onClick={()=> setIsAddToDoMenuOpen(true)} />



				</div>

		</header>
			<Drawer
				isOpen={isAddToDoMenuOpen}
				onClose={() => setIsAddToDoMenuOpen(false)}
				title = "Add todo"
			>
				<div>
					<TodoForm />
				</div>
		</Drawer>


	  </>		
	);
}

export default TodoApp


 