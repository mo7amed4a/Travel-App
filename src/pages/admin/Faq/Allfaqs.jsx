import React, { useState } from 'react';
import TableBooking from '../../../components/dashboard/TableBooking';
import { Button, Modal, TextInput } from 'flowbite-react';

export default function Allfaqs() {
  // إضافة حالة لإدارة ظهور المودال
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(''); // حالة لحفظ النص في حقل الإدخال

  // دالة لفتح المودال وتفريغ حقل الإدخال
  const handleEditClick = () => {
    setInputValue(''); // تفريغ حقل الإدخال عند فتح المودال
    setIsModalOpen(true); // إظهار المودال
  };

  // دالة لإغلاق المودال
  const closeModal = () => {
    setIsModalOpen(false); // إخفاء المودال
  };

  return (
    <div className="w-full">
      <TableBooking
        title={'Faqs'}
        Buttons={
          <>
            <Button onClick={handleEditClick}>
              Edit
            </Button>
            <Button color={"failure"}>Delete</Button>
          </>
        }
        description={"Faqs List"}
        className="w-full"
      />

      {/* المودال لعرض حقل الإدخال */}
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>Edit FAQ</Modal.Header>
        <Modal.Body>
          <TextInput
            type="text"
            value={inputValue} // قيمة الإدخال تكون فارغة
            placeholder="Enter FAQ name" // نص مبدئي للإرشاد
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
