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

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />      
      <Route path="/event" element={<Event />} />
      <Route path="/club" element={<Club />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/post-event" element={<PostEvent />} />
    </Routes>
  );
}
