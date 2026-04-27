import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { getDocument } from 'pdfjs-dist';

export default function Research({ bookId }) {
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const canvasRef = useRef(null);

  
  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`/api/books/${bookId}/reading`)
      .then(res => {
        if (res.data.url) setPdfUrl(res.data.url);
        else setError(res.data.message || 'PDF not available');
      })
      .catch(err => setError('Failed to load PDF'))
      .finally(() => setLoading(false));
  }, [bookId]);

  // تحميل PDF باستخدام pdf.js
  useEffect(() => {
    if (!pdfUrl) return;

    let pdfDoc = null;

    const loadPdf = async () => {
      const loadingTask = getDocument(pdfUrl);
      pdfDoc = await loadingTask.promise;
      setNumPages(pdfDoc.numPages);
      renderPage(currentPage, pdfDoc);
    };

    const renderPage = async (pageNum, pdfDoc) => {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = { canvasContext: context, viewport };
      await page.render(renderContext).promise;
    };

    loadPdf();
  }, [pdfUrl, currentPage]);

  // تحديث الصفحة الحالية وتتبع القراءة
  const goToPage = (page) => {
    if (page < 1 || page > numPages) return;
    setCurrentPage(page);

    // تحديث عدد الصفحات المقروءة في backend
    axios.post(`/api/books/${bookId}/track-page`, { page })
      .catch(err => console.error('Failed to track page', err));
  };

  if (loading) return <div>Loading PDF...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <canvas ref={canvasRef} style={{ border: '1px solid #ccc' }}></canvas>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
        <span style={{ margin: '0 10px' }}>{currentPage} / {numPages}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= numPages}>Next</button>
      </div>
    </div>
  );
}