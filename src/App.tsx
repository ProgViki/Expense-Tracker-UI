import { ConfigProvider } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './component/Navigation'
import Pricing from './pages/Pricing'



function App() {

  return (
    <>
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#0A96CC',
        borderRadius: 5,
      },
    }}
    >
   
    <BrowserRouter>
          <Routes>
           
            <Route path="pricing" element={<Pricing />}/>
            <Route>
                <Route path='/*' element={<Navigation />} />
            </Route>
          </Routes>
      </BrowserRouter>
 
    </ConfigProvider>

    </>
  )
}

export default App
