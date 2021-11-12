// в случае неработающего апи, работу юая можно посмотреть скопировав содержимое отсюда в table.jsx
//CRUD в таком случае работать не будет.


import React from "react";
import {
    Table,
    Column
} from "react-virtualized";
import 'react-virtualized/styles.css';
import faker from "faker";
import "./table.css";

export const TableComponent = () => {
    const [people, setPeople] = React.useState([]);
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        setPeople(
            [...Array(1000).keys()].map((key) => {
                return {
                    id: key,
                    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                    bio: faker.lorem.lines(Math.random() * 2),
                };
            })
        );
        }, []);

        React.useEffect(() => {
            const interval = setInterval(() => {
                setTime(new Date());
            }, 1000);

        return () => clearInterval(interval);
        }, []);

        return (
            <div className="container">
                <h3>{time.toISOString()}</h3> <h4>check for lags</h4>
                
                <div style={{ width: "100%", height: "100vh" }}>
                <Table
                    width={500}
                    height={300}
                    headerHeight={50}
                    rowHeight={60}
                    rowCount={people.length}
                    rowGetter={({ index }) => people[index]}
                    className='row-table'
                    onRowClick={(rowData)=>{
                    alert(rowData);
                    console.log(rowData);
                    }}
                >
                    <Column
                        label='Name'
                        dataKey='name'
                        width={100}
                    />
                    <Column
                        width={200}
                        label='Description'
                        dataKey='bio'
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