import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name : 'user',
    initialState: {name : '홍길동', age : 20},
    reducers: {
    changeName(state){
        state.name = '손오공'
        },
    
    increase(state, action) {
        state.age += action.payload
        }
    }
})

export let {changeName, increase} = user.actions

let Booking = createSlice({
    name : 'Booking',
    initialState : [
        {no: 1,
            Bname: '이한나',
            imgUrl:'/img/KakaoTalk_20251211_162844584.jpg',
            title: '블루 페디스톤 아트', 
            date: '2025-12-25 13:00',
            pnumber: '010-2222-4444',
            description: '색상은 레드로 부탁드려요',
        },
        {no: 2, 
            Bname: '김한나',
            imgUrl:'/img/KakaoTalk_20251211_162844584_03.jpg',
            title: '자석&스톤아트', date: '2025-12-26 13:00',
            pnumber: '010-2222-5555',
            description: '색상은 블루로 부탁드려요',
        },
        {no: 3, 
            Bname: '박한나',
            imgUrl:'/img/KakaoTalk_20251211_162844584_04.jpg',
            title: '블랙핑크 네일', date: '2025-12-30 13:00',
            pnumber: '010-2222-6666',
            description: '색상은 화이트로 부탁드려요'
        },
    ],
     reducers: {
        addBooking(state, action) {
            state.push(action.payload);
         },
        updateBooking(state, action) {
            const index = state.findIndex(item=>item.no === action.payload.no);
            if (index !==-1) {
                state[index] = action.payload;
            }
        },
        deleteBooking(state, action) {
            return state.filter(item => item.no !== action.payload);
        }
    },
    
});
export let {addBooking, updateBooking, deleteBooking} = Booking.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        Booking: Booking.reducer,
    },
   
});


