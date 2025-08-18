import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import ResultDetail from "./ResultDetail"

const Results = () => {
  return (
    <div className="w-full h-screen rounded-2xl">
        <Navbar />
        <div className="flex">
            <Sidebar />
            <ResultDetail />
        </div>
    </div>
  )
}

export default Results