import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value.trim();

    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue));
      navigate("/pokedex");
    }
    e.target.name.value = "";
  };

  return (
    <div className="home">
      <div className="banner_img">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        />
      </div>
      <h1>Hi Trainer !</h1>
      <p>Your trainer name to start</p>
      <form className="home-form"onSubmit={handleSubmit}>
        <input id="name" type="text" placeholder="Enter your name"/>
        <i className='bx bxs-down-arrow'></i>
        <button><div className='form-btn'></div></button>
      </form>
    </div>
  );
};

export default Home;
