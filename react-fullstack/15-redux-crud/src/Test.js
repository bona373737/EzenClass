import React, {memo, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getList,getItem, postItem, putItem, deleteItem } from "./slices/DepartmentSlice";
import { getList,getItem, postItem, putItem, deleteItem } from "./slices/ProfessorSlice";

const Test=memo(()=>{
    const dispatch = useDispatch();
    // const {data, loading, error} = useSelector((state)=>state.DepartmentSlice);
    const {data, loading, error} = useSelector((state)=>state.ProfessorSlice);

    useEffect(()=>{
        // dispatch(getList());
        // dispatch(getList({query:'기계',page:1, rows:2}));
        // dispatch(getItem({deptno:203}));
        // dispatch(postItem({dname:'React.js', loc:'1403호'}));
        // dispatch(putItem({deptno:201, dname:'React.js바뀜', loc:'1406호바뀜'}));
        // dispatch(deleteItem({deptno:205}));

        /******** Professor 테스트 */
        // dispatch(getList());
        // dispatch(getList({query:'교수',page:1, rows:2}));
        // dispatch(getItem({profno:9905}));
        // dispatch(postItem({name:'홍나나', userid:'hong123', position:'전임강사',sal:300, hiredate:"2020-03-05", comm:50, deptno:102}));
        // dispatch(putItem({deptno:201, dname:'React.js바뀜', loc:'1406호바뀜'}));
        // dispatch(deleteItem({profno:9905}));


    },[dispatch]);

    return(
        loading? "loading..." :(
            error? JSON.stringify(error):(
                <>
                    {JSON.stringify(data)}
                </>
            )
        )
    )
});

export default Test;