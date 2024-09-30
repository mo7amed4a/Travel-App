import React, { useState } from 'react';
import TableBooking from '../../../components/dashboard/TableBooking';
import { Button, Modal, TextInput } from 'flowbite-react';

export default function Answer() {
  // حالة لإدارة ظهور المودال
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(''); // حالة لحفظ النص في حقل الإدخال

  // دالة لفتح المودال وتفريغ حقل الإدخال
  const handleAnswerClick = () => {
    setInputValue(''); // تفريغ حقل الإدخال عند فتح المودال
    setIsModalOpen(true); // إظهار المودال
  };

  // دالة لإغلاق المودال
  const closeModal = () => {
    setIsModalOpen(false); // إخفاء المودال
  };

  return (
    <div className='w-full'>
      <TableBooking
        title={"Answers"}
        description={"Answers Lists"}
        Buttons={
          <>
            <Button onClick={handleAnswerClick}>
              Answer
            </Button>
            <Button color={"failure"}>Delete</Button>
          </>
        }
      />

      {/* المودال لعرض حقل الإدخال */}
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>Answer</Modal.Header>
        <Modal.Body>
          <TextInput
            type="text"
            value={inputValue} // قيمة الإدخال
            placeholder="Enter your answer here" // نص مبدئي للإرشاد
            onChange={(e) => setInputValue(e.target.value)} // تحديث قيمة الإدخال عند الكتابة
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Save</Button>
          <Button color="failure" onClick={closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
