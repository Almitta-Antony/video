import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHis, getAllHistory } from '../services/allapis';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




function History() {

    const [histories, setHistories] = useState([])

    const getHistories = async () => {
        const { data } = await getAllHistory()
        //   console.log(data);
        setHistories(data);
    }

    useEffect(() => {
        getHistories()
    }, [])
    // console.log(histories);

    const removeItem=async(id)=>{
        const result= await deleteHis(id)
        if(result.status>=200 && result.status<300){
         getHistories()
        }
     }
     

    return (
        <div>
            
<h2 className='text-center mt-4'>WATCH HISTORY</h2>
            {histories.length > 0 ?
                (
<div className='t1 table-responsive ms-3 me-3 mt-5'>
                    
                    <Table 
                     striped bordered hover size="sm"  className='text-center bg-dark text-light'  >
                        <thead>
                            <tr>
                                <th>No.sl</th>
                                <th>Date</th>
                                <th>Title</th>
                                <th>url</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
    
                            {histories?.map((i, index) => (
    
    
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.date}</td>
                                    <td>{i.video_title}</td>
                                    <td>{i.url}</td>
                                    <td><Trash2 onClick={()=>{removeItem(i?.id)}}></Trash2></td>
                                </tr>
                            ))
                            }
    
                        </tbody>
                    </Table>
    
</div>                ) :
                <h1>no histories</h1>
                
            }  
            
<div className='text-center mt-5'>
<Link to={'/home'}>
                    <Button variant=""  className=' mt-2   bg-dark text-light '>
                        <img src="https://i.postimg.cc/kXCcVqD6/backarrow-removebg-preview.png"
                        style={{
                            width:"20px",
                            height:"20px"
                        }} 
                        className='me-3'
                        alt="" />
                Go back Home
              </Button>
    
</Link>    
</div>    
    </div>
    )
}

export default History