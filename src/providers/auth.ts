// import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
// import axios from 'axios'

// const useAuthStore = create(
//     persist(
//         (set, get) => ({
//             user: null,
//             accessToken: '',
//             refreshToken: '',
//             logIn: (user) => {
//                 set(() => ({
//                     accessToken: user.accessToken,
//                     refreshToken: user.refreshToken
//                 }))
//                 get().refreshUser()
//             },
//             logOut: () => {
//                 set(() => ({ accessToken: '', refreshToken: '', user: null }))
//             },
//             getNewToken: async () => {
//                 try {
//                     const res = await axios.post(
//                         `${process.env.REACT_APP_HOST_URL}/api/refreshToken`,
//                         {},
//                         {
//                             headers: {
//                                 Authorization: `Bearer ${get().refreshToken}`
//                             }
//                         }
//                     )
//                     get().logIn(res.data.response)
//                 } catch (error) {
//                     console.log(error)
//                 }
//             },
//             refreshUser: async () => {
//                 const resp = await axios.get(
//                     `${process.env.REACT_APP_HOST_URL}/api/auth/user`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${get().accessToken}`
//                         }
//                     }
//                 )
//                 set(() => ({
//                     user: {
//                         name: resp.data.user.name,
//                         email: resp.data.user.email,
//                         picture: resp.data.user.picture
//                     }
//                 }))
//             }
//         }),
//         { name: 'AuthStore' }
//     )
// )

// export function useCurrentUser() {
//     return useAuthStore((state) => state.user)
// }

// export default useAuthStore
