import React, { useRef } from 'react';
import { GoX } from "react-icons/go";
import Image from 'next/image';

function Newmodal({ onClose, token }) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-tetiary bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5">
                <button onClick={onClose} className="place-self-end"><GoX size={30} /></button>
                <div className=" rounded-xl w-80 px-7 py-5 flex flex-col gap-3 items-center mx-2" style={{background: '#001e3c'}}>
                    <Image src={token.image} alt='token image' width={100} height={100} style={{
                                            width: '5rem',
                                            height: 'auto',
                                            borderRadius: '50%',
                                        }} />
                    <h2>{token.title}</h2>
                    <p><span className="text-red">Description</span>: <span className="text-notwhite"> {token.action}</span></p>
                    <p>Value: {token.value}</p>
                    <p>Status: <span className="text-green">{token.status}</span> </p>
                </div>
            </div>
        </div>
    );
}

export default Newmodal;
