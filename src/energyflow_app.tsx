import React from 'react';

const EnergyFlowApp = () => {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      backgroundColor: '#1e293b', 
      color: 'white', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#10b981' }}>🚀 EnergyFlow App</h1>
      <p>Welcome to the Energy Trading Platform!</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#334155', 
        borderRadius: '10px',
        maxWidth: '400px',
        margin: '20px auto'
      }}>
        <h3>✅ Successfully Deployed</h3>
        <p>Your app is now live on Netlify!</p>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>
          Private GitHub → Public Netlify Deployment
        </p>
      </div>
    </div>
  );
};

export default EnergyFlowApp;
