import React,{Component} from 'react'
import { Link } from 'dva/router' 
import { connect } from 'dva'

const Test_data =(props)=>{


		console.log(props.products)
		return(
			<div>
				<Link to="/">回到首页</Link>
			</div>
		)
	
}
export default connect(({products})=>({
	products
}))(Test_data)

