import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDummyTC} from "./reducers/dummy-reducer";
import {AppRootStateType} from "./store";
import {RequestStatusType} from "./reducers/app-reducer";
import {CircularProgress, TableCell, TableRow, Table} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


function App() {
    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const data = useSelector<AppRootStateType, any>(state => state.dummy.data)


    useEffect(() => {
        dispatch(getDummyTC())
    }, [dispatch])


    if (status === 'loading') {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div>
            {data.map((el: any) => {
                return (

                    <Table key={el.id}  >
                        <Typography variant="h6">

                           №: {el.id}
                            <TableCell>
                            <TableRow >
                                Employee name: <b>{el.employee_name} </b>
                            </TableRow>
                            <TableRow>
                                Employee salary: <b>{el.employee_salary}</b>
                            </TableRow>
                            <TableRow>
                                Employee age: <b>{el.employee_age}</b>
                            </TableRow>
                            </TableCell>
                        </Typography>
                    </Table>

                )
            })}

        </div>

    );
}


export default App;
