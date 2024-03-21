    import { useState } from "react";
    import { FaPlus } from "react-icons/fa6";
    import { FaMinus } from "react-icons/fa";
    import assignmentImage from "/src/resources/assignment3.jpg";
    import { data } from "../assets/data";
    const Main = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [filterData,setFilterData]=useState(data);
    const [value,setValue]=useState("");
        const [selectedAlpha,setSelectedAlpha]=useState("")
    const handleClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    const handleChange= (event)=>{
       const searchValue=event.target.value;
       setValue(searchValue);
    console.log(value)

    const filterItems=data.filter((item)=>item.Title.toLowerCase().includes(searchValue.toLowerCase()));
    setFilterData(filterItems);

    }

    const handleSelectChange=(e)=>{
const selectedAlphabet=e.target.value;
setSelectedAlpha(selectedAlphabet);
const filterItems = data.filter((item) =>
item.Title.toLowerCase().startsWith(selectedAlphabet.toLowerCase())
);
setFilterData(filterItems);
    }

    return (
        <>
        <div
            className="bg-blue h-96"
            style={{ backgroundImage: `url(${assignmentImage})` }}
        >
            <div className="flex h-96 items-center justify-center font-semibold text-5xl  ">
            <h1 className="text-white">Glossary</h1>
            </div>
        </div>

        <div className="flex justify-center">
            <div className="mt-4 h-[150px] grid grid-cols-2 gap-6">
            <div>
                <p>Alphabetically</p>
                <select
                name="alpha"
                className="h-[40px] w-[120px] cursor-pointer bg-white text-amber-950 border-2 border-amber-950"
               onChange={handleSelectChange}
                
                >
                <option value="">Select Alphabet</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="I">I</option>
              <option value="M">M</option>
              <option value="O">O</option>
              <option value="P">P</option>
              <option value="B">R</option>
              <option value="T">T</option>
              <option value="V">V</option>
                </select>
            </div>
            <div>
                <p>Sort By</p>
                <select
                name="sort"
                className="h-[40px] cursor-pointer bg-white text-amber-950 border-2 border-amber-950"
                id=""
                >
                <option value="mostUsed">Mostly used</option>
                <option value="alpha">Alphabetically</option>
                </select>
            </div>
    
            </div>
        </div>
        <hr className="border-amber-950 border-2" />
    <div className="text-center mt-4">

        <input type="text" className="border-2 p-2 border-amber-950 w-60 text-center" placeholder="search accordian" value={value} onChange={handleChange} />

    </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  m-auto  p-5">
            {filterData.map((item, index) => (
                <div
                key={index}
                className={`item bg-red-50 w-[350px] md:w-[400px] cursor-pointer border-2 transition-all duration-300 border-gray-400 p-1`}
                onClick={() => handleClick(index)}
                style={{ height: openIndex === index ? "210px" : "80px" }}
                >
                <div className="flex justify-between p-1 flex-wrap">
                    <div>
                    <h1 className="text-amber-900 font-bold">{item.Title}</h1>
                    <h2 className="subTitle text-gray-600 font-semibold text-lg">
                        {item.subTitle}
                    </h2>
                    </div>
                    {
     openIndex ===index ? <FaMinus  color="black" className="" size={20} /> :  <FaPlus color="black" className="" size={20}/>
                    }
             
                </div>
                {openIndex === index && (
                    <div className="info text-amber-950">{item.info}</div>
                )}
                </div>
            ))}
            </div>
        </div>
        </>
    );
    };



    export default Main;
