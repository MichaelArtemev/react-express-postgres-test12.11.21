import React, { useState } from "react";
import {
    Table,
    Column
} from "react-virtualized";
import 'react-virtualized/styles.css';
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getCurrentData, deleteCurrentData, patchCurrentData } from "../../store/asyncAction/listapi";
import Modal from "../component-Modal/component-Modal";

export const TableComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataSet);
    const currentData = useSelector(state => state.currentData);
    const [modalActive, setModalActive] = useState(false);
    const [description, setDescription] = useState('');
    const [price, setPrice] =useState('');

        React.useEffect(() => {
            dispatch(fetchData());
        }, [fetchData]);

        return (
            <div className="container">
            <Modal active={modalActive} setActive={setModalActive}>
                <h1>list id: {currentData.id}</h1>
                <form>
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                        <input
                        onChange={(e)=>
                        {setDescription(e.target.value)}}
                        value={description}
                        required
                        type="text"
                        className="form-control "
                        placeholder={currentData.descript}
                        aria-label="Username"
                        aria-describedby="basic-addon1"/>
                        <input
                        onChange={(e)=>
                        {setPrice(e.target.value)}}
                        value={price}
                        required
                        type="number"
                        className="form-control"
                        placeholder={currentData.price}
                        aria-label="Username"
                        aria-describedby="basic-addon1"/>
                    </div>
                    <div className="d-flex m-1">
                        <button
                        className="btn btn-warning m-2"
                        onClick={()=>{
                            dispatch(patchCurrentData(currentData.id, {
                                descript: description,
                                priceList: price
                            }));
                        }}
                        >Редактировать</button>
                        <button
                        className="btn btn-danger m-2"
                        onClick={
                            ()=>{
                                dispatch(deleteCurrentData(currentData.id));
                                setModalActive(false);
                                dispatch(fetchData());
                            }
                        }>Удалить</button>
                    </div>
                </form>
            </Modal>


                {/* <h3>{time.toISOString()}</h3> <h4>check for lags</h4> */}
                
                <div style={{ width: "100%", height: "100vh" }}>
                <Table
                    width={500}
                    height={300}
                    headerHeight={50}
                    rowHeight={60}
                    rowCount={data.length}
                    rowGetter={({ index }) => data[index]}
                    className='row-table'
                    onRowClick={(rowData)=>{
                        let id = rowData.rowData.id;
                        setModalActive(true);
                        dispatch(getCurrentData(id));
                    }}
                >
                    <Column
                        label='Name'
                        dataKey='descript'
                        width={100}
                    />
                    <Column
                        width={200}
                        label='Description'
                        dataKey='price'
                    />
                    <Column
                        width={200}
                        label='Action'
                        className='row-change'
                        dataKey=''
                    />
            </Table>,
        </div>
    </div>
    );
}
