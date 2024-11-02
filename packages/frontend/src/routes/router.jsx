import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Event from '../pages/Event';
import Club from '../pages/Club';
import PostEvent from '../pages/PostEvent';
import Feedback from '../pages/Feedback';
import NewHome from '../pages/newHome'
import Winners from '../pages/Winners'
import Suggestions from '../pages/Suggestions'
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<NewHome/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />      
      <Route path="/explore-events" element={<Event />} />
      <Route path="/clubs" element={<Club />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/post-event" element={<PostEvent />} />
      <Route path="/newHome" element={<NewHome/>}/>
      <Route path="/winners" element={<Winners/>}/>
      <Route path="/suggestions" element={<Suggestions/>}/>
    </Routes>
  );
}
