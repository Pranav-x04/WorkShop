import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './table.css';

export default function Table1() {
    const [data, setData] = useState([]);

    async function init() {
        let res = await axios.get('http://localhost:8080/get');
        let dat = res.data;
        setData(dat);
        /*console.log(dat);
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });*/
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8080/delete${id}`)
            .then((response) => {
                const newdata = data.filter((item) => item.id !== id);
                setData(newdata);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateData = async (id, newData) => {
      try {
        await axios.put(`http://localhost:8080/update/${id}`, newData);
        setData(
          data.map((item) => (item.id === id ? { ...item, ...newData } : item))
        );
        
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => { init() }, [])
    return (
        <table class="table"border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Engine</th>
                    <th>Speed</th>
                    <th>Power</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.bike_name}</td>
                        <td>{user.engine_CC}</td>
                        <td>{user.top_speed}</td>
                        <td>{user.power}</td>
                         <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => deleteData(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                        <td>
                        <button
                        className="btn btn-secondary"
                        onClick={() => {
                          const newData = prompt("Enter new data:");
                          if (newData) {
                            updateData(user.id, { id: newData });
                          }
                        }}
                      >
                        Update
                      </button>
                      </td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
}
