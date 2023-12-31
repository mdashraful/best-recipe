import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Blog = () => {
    const generatePdf = () => {
        const input = document.getElementById('pdf-element');
        html2canvas(input)
            .then((canvas) => {
                const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvas.width, canvas.height);
                pdf.save('document.pdf');
            });
    };

    return (
        <div className='mt-5 border border-1 mx-auto p-4'>
            <div className='text-end'>
                <button onClick={generatePdf} className='btn btn-secondary rounded-0'>Generate PDF</button>
            </div>
            <div id="pdf-element">
                <div className=" " >
                    <h3 className="mb-5 text-center fw-bold text-danger text-decoration-underline">
                        Blogs
                    </h3>
                    <h6>
                        1. Tell us the differences between uncontrolled and controlled
                        component.
                    </h6>
                    <p className="ms-3 mb-4">
                        An uncontrolled component managed by its own state. When user interact,
                        uncontrolled component updates its state value. it is more difficult to
                        debug and more complex code.
                        <br />A controlled component managed by components state. Controlled
                        component updates components value on user interaction. It is easy to
                        debug, and less complex code than uncontrolled component.
                    </p>
                    <h6>2. How to validate React Props using PropType?</h6>
                    <p className="ms-3 mb-4">
                        PropTypes is React's internal mechanism for adding type checking to component props. There are many ways to validate React Props using PropTypes. Like: PropTypes.any, PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.array, PropTypes.object.
                    </p>
                    <h6>3. Tell us the difference between Node.js and Express.js</h6>
                    <p className="ms-3 mb-4">
                        Node.js is a platform or environment for building server-side. It is
                        build on Google's V8 engine.
                        <br />
                        Express.js is a frameworks based on Node.js which is used to build
                        web-applications. It is build on Node.js.
                    </p>
                    <h6>4. What is custom hook? Why will you create a custom hook?</h6>
                    <p className="ms-3">
                        A custom hook is a Javascript function, whose name starts with "use" and
                        that may call other hooks.
                        <br />
                        Custom hook can be reused easily, which makes the code cleaner. It also
                        enhances the rendering speed. That's why we will create a custom hook.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;