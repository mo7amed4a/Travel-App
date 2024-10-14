import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

const RichBlog = ({ setFieldValue, description }) => {
  const handleChange = (html) => {
    setFieldValue('description', html);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      [{ 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean'],
    ],
  };

  return (
    <div className='mb-6'>
      <ReactQuill className='h-[30vh]'
        value={description} // استخدام القيمة من Formik
        onChange={handleChange}
        modules={modules}
      />
    </div>
  );
};

export default RichBlog;
