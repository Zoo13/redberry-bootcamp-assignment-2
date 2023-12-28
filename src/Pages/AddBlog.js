import './AddBlog.css';
import logo from '../images/LOGO-02-3.png'
import backArrow from '../images/Back.png'
import folderAdd from '../images/folder-add.png'
import calendar from '../images/calendar.png'
import info from '../images/info-circle.png'
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Select from 'react-select'
import { Link } from 'react-router-dom';

const AddBlog = (props) => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles[0])
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const data = [
        { value: 'india', label: 'India', color: 'red' },
        { value: 'slovenia', label: 'Slovenia', color: 'green' },
        { value: 'xaxamsa', label: 'Xaxamsa', color: 'grey' },
    ]

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: '288px',
            minHeight: '46px',
            border: '1px solid #E4E3EB;',
            borderRadius: '12px',
            boxShadow: 'none',
            outline: state.menuIsOpen ? '2px solid #5D37F3' : 'initial',
            transition: 'none',
            '&:hover': {
                borderColor: '',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.data.color,
            color: 'white',
            textAlign: 'center',
            borderRadius: 30,
            '&:active': {
                background: 'none',
            },
            cursor: 'pointer',
        }),

        multiValue: (styles, state) => ({
            ...styles,
            backgroundColor: state.data.color,
            borderRadius: 30,
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            padding: 0,
            margin: '8px 12px 8px 8px',
            color: 'white',
            cursor: 'pointer',
            backgroundColor: 'none', // 
            '&:hover': {
                backgroundColor: 'transparent',
                color: 'white',

            },
        }),
        clearIndicator: (provided) => ({
            ...provided,
            display: 'none',
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            cursor: 'pointer',
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            color: 'none',
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '14px',
            color: '#85858D'
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white',
            margin: '8px 0 8px 12px',
            padding: 0,
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '4px',
            flexWrap: 'nowrap',
            display: '-webkit-box',
            overflowX: 'auto',
        }),
    };

    const changeStatus = () => {
        props.updateStateValue(true)
    }

    return (

        <div>
            <header className='addblog-header'>
                <img src={logo} />
            </header>
            <div className='addblog-body'>
                <form className='addblog-container'>
                    <Link to='/' onClick={changeStatus}>
                        <div className='backArrow'>
                            <img src={backArrow} />
                        </div>
                    </Link>
                    <h1> ბლოგის დამატება</h1>
                    <h5> ატვირთეთ ფოტო </h5>
                    <div {...getRootProps()} className='drop-zone'>
                        <input {...getInputProps()} />
                        <div style={{ width: 40, height: 40, marginBottom: 8 }}>
                            <img src={folderAdd} />
                        </div>
                        <p>ჩააგდეთ ფაილი აქ ან <span> აირჩიეთ ფაილი </span></p>
                    </div>
                    <div className='author-title'>
                        <div className='author'>
                            <label>ავტორი *</label>
                            <input className='input-field' placeholder='შეიყვანეთ ავტორი'></input>
                            <ul>
                                <li>მინიმუმ 4 სიმბოლო</li>
                                <li>მინიმუმ 2 სიტყვა </li>
                                <li>მხოლოდ ქართული სიმბოლოებით</li>
                            </ul>
                        </div>
                        <div className='title'>
                            <label>სათაური *</label>
                            <input className='input-field' placeholder='შეიყვანეთ სათაური'></input>
                            <ul>
                                <li>მინიმუმ 4 სიმბოლო</li>
                            </ul>
                        </div>
                    </div>
                    <div className='description-box'>
                        <label>აღწერა *</label>
                        <textarea className='input-field description-field' placeholder='შეიყვანეთ სათაური'></textarea>
                        <ul>
                            <li>მინიმუმ 4 სიმბოლო</li>
                        </ul>
                    </div>
                    <div className='date-category'>
                        <div className='date-input-box'>
                            <label>გამოქვეყნების თარიღი *</label>
                            <img src={calendar} />
                            <input type="date" className='input-field' defaultValue={'2024-01-01'}></input>
                        </div>
                        <div className='category'>
                            <label>კატეგორია *</label>
                            <Select
                                isMulti
                                options={data}
                                styles={customStyles}
                                placeholder='შეიყვნეთ სათაური'
                            />
                            {/* <Multiselect
                            // style={customStyles}
                                // style={{
                                //     option: {
                                //         backgroundColor: 'lightblue',
                                //       },
                                // }}
                                customCloseIcon={<img src={cancelIcon} style={{ width: 16 }} />}
                                id="select"
                                placeholder='აირჩიე კატეგორია'
                                options={data}
                                displayValue='category'
                                className='select' /> */}

                            {/* <div className='dropArrow'>
                                <img src={arrowDown} ></img>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <div className='mail'>
                            <label>ელ-ფოსტა *</label>
                            <input className='input-field' placeholder='Example@redbery.ge'></input>
                            <div className='error'>
                                <img src={info} />
                                <p>მეილი უნდა მთავრდებოდეს @redberry.ge-ით</p>
                            </div>
                        </div>
                    </div>
                    <button className='submit'> გამოქვეყნება </button>
                </form>
            </div>
        </div>
    )
}


export default AddBlog;