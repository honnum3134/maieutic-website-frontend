import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const STORAGE_KEY = 'maieutic_leads';
const HR_PASSWORD  = 'maieutic@hr2025';  // Change this to whatever you want

const HrleadsPage = () => {
  const [leads, setLeads]       = useState([]);
  const [authed, setAuthed]     = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  useEffect(() => {
    if (authed) {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      setLeads(data);
    }
  }, [authed]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === HR_PASSWORD) {
      setAuthed(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const downloadExcel = () => {
    if (leads.length === 0) {
      alert('No leads to download yet.');
      return;
    }
    const rows = leads.map((l, i) => ({
      'S.No':         i + 1,
      'Name':         l.name        || '',
      'Phone':        l.phone       || '',
      'Email':        l.email       || '',
      'Submitted At': l.submittedAt || '',
    }));
    const ws = XLSX.utils.json_to_sheet(rows);

    // Column widths
    ws['!cols'] = [
      { wch: 6 },
      { wch: 25 },
      { wch: 18 },
      { wch: 30 },
      { wch: 28 },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Leads');

    const today = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `Maieutic_Leads_${today}.xlsx`);
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear ALL lead records? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('maieutic_lead_submitted');
      setLeads([]);
    }
  };

  // ── Login screen ──
  if (!authed) {
    return (
      <div style={{
        minHeight: '100vh', background: 'linear-gradient(135deg, #00615c, #004d49)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Poppins', sans-serif",
      }}>
        <div style={{
          background: '#fff', borderRadius: '20px', padding: '48px 40px',
          width: '90%', maxWidth: '420px',
          boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: '#800d07', textTransform: 'uppercase', marginBottom: '10px' }}>
              MAIEUTIC EDUTECH
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: '#00615c', fontWeight: 700, marginBottom: '8px' }}>
              HR Portal
            </h1>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6 }}>
              Enter your password to access lead records.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#00615c', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter HR password"
                required
                style={{
                  width: '100%', padding: '12px 14px',
                  border: '2px solid #e0e0e0', borderRadius: '8px',
                  fontFamily: "'Poppins', sans-serif", fontSize: '14px',
                  outline: 'none', boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#00615c'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            {error && (
              <p style={{ color: '#c62828', fontSize: '13px', marginBottom: '16px', fontWeight: 600 }}>
                {error}
              </p>
            )}
            <button type="submit" style={{
              width: '100%', padding: '13px',
              background: '#800d07', border: 'none', borderRadius: '8px',
              fontFamily: "'Poppins', sans-serif", fontSize: '15px',
              fontWeight: 700, color: '#fff', cursor: 'pointer',
            }}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Dashboard screen ──
  return (
    <div style={{ minHeight: '100vh', background: '#f4f5f7', fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #00615c, #004d49)',
        padding: '24px 40px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: '#FEF1DE', textTransform: 'uppercase', marginBottom: '6px' }}>
            MAIEUTIC EDUTECH
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', color: '#fff', fontWeight: 700 }}>
            Lead Records
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={downloadExcel} style={{
            padding: '12px 24px', background: '#FEF1DE',
            border: 'none', borderRadius: '8px',
            fontFamily: "'Poppins', sans-serif", fontSize: '14px',
            fontWeight: 700, color: '#800d07', cursor: 'pointer',
          }}>
            ⬇ Download Excel
          </button>
          <button onClick={clearAll} style={{
            padding: '12px 24px', background: 'rgba(255,255,255,0.15)',
            border: '2px solid rgba(255,255,255,0.3)', borderRadius: '8px',
            fontFamily: "'Poppins', sans-serif", fontSize: '14px',
            fontWeight: 600, color: '#fff', cursor: 'pointer',
          }}>
            🗑 Clear All
          </button>
          <button onClick={() => setAuthed(false)} style={{
            padding: '12px 24px', background: '#800d07',
            border: 'none', borderRadius: '8px',
            fontFamily: "'Poppins', sans-serif", fontSize: '14px',
            fontWeight: 600, color: '#fff', cursor: 'pointer',
          }}>
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '32px 40px 0' }}>
        <div style={{
          background: '#fff', borderRadius: '12px',
          padding: '20px 28px', display: 'inline-block',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}>
          <p style={{ fontSize: '12px', color: '#888', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Total Leads
          </p>
          <p style={{ fontSize: '36px', fontWeight: 700, color: '#00615c', fontFamily: "'Playfair Display', serif" }}>
            {leads.length}
          </p>
        </div>
      </div>

      {/* Table */}
      <div style={{ padding: '24px 40px 60px' }}>
        {leads.length === 0 ? (
          <div style={{
            background: '#fff', borderRadius: '12px', padding: '60px',
            textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          }}>
            <p style={{ fontSize: '40px', marginBottom: '16px' }}>📋</p>
            <p style={{ fontSize: '18px', color: '#888', fontWeight: 600 }}>No leads yet</p>
            <p style={{ fontSize: '14px', color: '#aaa', marginTop: '8px' }}>
              Leads will appear here once visitors fill the popup form.
            </p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              background: '#fff', borderRadius: '12px',
              overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #00615c, #004d49)' }}>
                  {['S.No', 'Name', 'Phone', 'Email', 'Submitted At'].map((h) => (
                    <th key={h} style={{
                      padding: '16px 20px', textAlign: 'left',
                      fontFamily: "'Poppins', sans-serif", fontSize: '12px',
                      fontWeight: 700, color: '#fff',
                      letterSpacing: '0.5px', textTransform: 'uppercase',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                    <td style={{ padding: '14px 20px', fontSize: '14px', color: '#888' }}>{i + 1}</td>
                    <td style={{ padding: '14px 20px', fontSize: '14px', color: '#333', fontWeight: 600 }}>{lead.name}</td>
                    <td style={{ padding: '14px 20px', fontSize: '14px', color: '#333' }}>{lead.phone}</td>
                    <td style={{ padding: '14px 20px', fontSize: '14px', color: '#333' }}>{lead.email}</td>
                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#888' }}>{lead.submittedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default HrleadsPage;