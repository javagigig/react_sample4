import './PostAdd.css';
import React from 'react'

const PostAdd = () =>{
    

    return <div>
             <div>
                <table>
                    <tr>
                        <th>제목</th>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea cols="30" rows="10"></textarea>
                        </td>
                    </tr>
                </table>
                <div>
                    <button>작성</button>
                    <button>취소</button>
                </div>
             </div>
    </div>
}

export default PostAdd;