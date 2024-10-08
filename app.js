let web3;
let contractAddress = '0xe5fBA876F90686215A64b6581EED0c253d8e8fc9';
let contractABI = [{
        "inputs": [{
                "internalType": "uint256",
                "name": "questionId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "commentText",
                "type": "string"
            }
        ],
        "name": "addComment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "uint256",
                "name": "questionId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "commentId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "downvotes",
                "type": "uint256"
            }
        ],
        "name": "CommentDownvoted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "commenter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "questionId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "commentId",
                "type": "uint256"
            }
        ],
        "name": "CommentSubmitted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "uint256",
                "name": "questionId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "commentId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "upvotes",
                "type": "uint256"
            }
        ],
        "name": "CommentUpvoted",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "questionId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "commentId",
                "type": "uint256"
            }
        ],
        "name": "downvoteComment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "imageLink",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "question",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "details",
                "type": "string"
            }
        ],
        "name": "QuestionSubmitted",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "_imageLink",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_question",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_details",
                "type": "string"
            }
        ],
        "name": "submitQuestion",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "questionId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "commentId",
                "type": "uint256"
            }
        ],
        "name": "upvoteComment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "comments",
        "outputs": [{
                "internalType": "address",
                "name": "commenter",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "commentText",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "upvotes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "downvotes",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllQuestions",
        "outputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "imageLink",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "question",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "details",
                    "type": "string"
                }
            ],
            "internalType": "struct CriticalThinker.QuestionData[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "questionId",
            "type": "uint256"
        }],
        "name": "getComments",
        "outputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "commenter",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "commentText",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "upvotes",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "downvotes",
                    "type": "uint256"
                }
            ],
            "internalType": "struct CriticalThinker.CommentData[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "questions",
        "outputs": [{
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "imageLink",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "question",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "details",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

window.onload = async function() {

    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);

        const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });
        const userWalletAddress = accounts[0];

        document.getElementById('wallet').value = userWalletAddress;

        window.contract = new web3.eth.Contract(contractABI, contractAddress);

        loadQuestions();
    } else {
        alert("MetaMask not found! Please install MetaMask.");
    }
};

document.getElementById('submission-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    if (typeof web3 === 'undefined') {
        console.error("Web3 is not initialized. Make sure MetaMask is connected.");
        return;
    }

    const wallet = document.getElementById('wallet').value;
    const link = document.getElementById('link').value;
    const question = document.getElementById('question').value;
    const details = document.getElementById('details').value;

    try {

        const gasPrice = await web3.eth.getGasPrice();

        await window.contract.methods.submitQuestion(link, question, details)
            .send({
                from: wallet,
                gasPrice: gasPrice
            })
            .on('transactionHash', function(hash) {
                console.log("Transaction sent with hash: ", hash);
            })
            .on('receipt', function(receipt) {
                console.log("Transaction successful with receipt: ", receipt);
            })
            .on('error', function(error) {
                console.error("Transaction error: ", error);
            });
    } catch (error) {
        console.error("Error submitting question:", error);
    }
});

async function loadQuestions() {
    try {

        const questions = await window.contract.methods.getAllQuestions().call();

        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.innerHTML = '';

        questions.forEach((question, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>Question by: ${question.user}</h3>
                <img src="${question.imageLink}" alt="Image" style="max-width: 100%; height: auto;" 
                    onclick="showComments(${index})" />
                <p><strong>Question:</strong> ${question.question}</p>
                <p><strong>Details:</strong> ${question.details}</p>

                <!-- Comment Section (Initially hidden) -->
                <div id="comments-section-${index}" class="comment-section" style="display: none;">
                    <h4>Comments</h4>
                    <div id="comments-${index}" class="comments"></div>

                    <!-- Comment Form -->
                    <form id="comment-form-${index}" onsubmit="submitComment(event, ${index})">
                        <textarea id="comment-text-${index}" placeholder="Write your comment..." required></textarea>
                        <button type="submit">Submit Comment</button>
                    </form>
                </div>
            `;
            cardsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

function showComments(questionId) {
    const commentSection = document.getElementById(`comments-section-${questionId}`);

    if (commentSection.style.display === 'none') {
        commentSection.style.display = 'block';
        loadComments(questionId);
    }
}

async function loadComments(questionId) {
    try {

        const comments = await window.contract.methods.getComments(questionId).call();

        const commentsContainer = document.getElementById(`comments-${questionId}`);
        commentsContainer.innerHTML = '';

        comments.forEach((comment, index) => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
			commentElement.innerHTML = `<p><strong>User:</strong> ${comment.commenter}</p>  <!-- Display user at the top -->
			<p class="comment-text"><strong>Comment:</strong> ${comment.commentText}</p> <!-- Display comment below -->
			<div class="comment-actions">
				<button class="upvote" onclick="upvoteComment(${questionId}, ${index})">👍 ${comment.upvotes}</button>
				<button class="downvote" onclick="downvoteComment(${questionId}, ${index})">👎 ${comment.downvotes}</button>
				<button class="support" onclick="supportComment('${comment.commenter}')">💰 Support</button>
			</div>`;



            commentsContainer.appendChild(commentElement);
        });

    } catch (error) {
        console.error(`Error fetching comments for question ${questionId}:`, error);
    }
}

async function submitComment(event, questionId) {
    event.preventDefault();

    const commentText = document.getElementById(`comment-text-${questionId}`).value;

    const wallet = document.getElementById('wallet').value;

    try {

        const gasPrice = await web3.eth.getGasPrice();

        await window.contract.methods.addComment(questionId, commentText)
            .send({
                from: wallet,
                gasPrice: gasPrice
            })
            .on('transactionHash', function(hash) {
                console.log("Comment submitted with hash: ", hash);
            })
            .on('receipt', function(receipt) {
                console.log("Comment successfully submitted: ", receipt);
                loadComments(questionId);
            })
            .on('error', function(error) {
                console.error("Error submitting comment:", error);
            });

        document.getElementById(`comment-text-${questionId}`).value = '';

    } catch (error) {
        console.error("Error submitting comment:", error);
    }
}

async function upvoteComment(questionId, commentId) {
    try {
        const wallet = document.getElementById('wallet').value;

        const gasPrice = await web3.eth.getGasPrice();

        await window.contract.methods.upvoteComment(questionId, commentId)
            .send({
                from: wallet,
                gasPrice: gasPrice
            })
            .on('transactionHash', function(hash) {
                console.log("Upvote sent with hash: ", hash);
            })
            .on('receipt', function(receipt) {
                console.log("Upvote successful: ", receipt);

                loadComments(questionId);
            })
            .on('error', function(error) {
                console.error("Error upvoting comment:", error);
            });

    } catch (error) {
        console.error("Error upvoting comment:", error);
    }
}

async function downvoteComment(questionId, commentId) {
    try {
        const wallet = document.getElementById('wallet').value;

        const gasPrice = await web3.eth.getGasPrice();

        await window.contract.methods.downvoteComment(questionId, commentId)
            .send({
                from: wallet,
                gasPrice: gasPrice
            })
            .on('transactionHash', function(hash) {
                console.log("Downvote sent with hash: ", hash);
            })
            .on('receipt', function(receipt) {
                console.log("Downvote successful: ", receipt);

                loadComments(questionId);
            })
            .on('error', function(error) {
                console.error("Error downvoting comment:", error);
            });

    } catch (error) {
        console.error("Error downvoting comment:", error);
    }
}

async function supportComment(commentOwner) {
    try {

        const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });
        const userWalletAddress = accounts[0];

        const amountInWei = '999000000';

        const transactionParams = {
            from: userWalletAddress,
            to: commentOwner,
            value: web3.utils.toHex(amountInWei),
            gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
            gas: web3.utils.toHex(21000),
        };

        await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParams],
        }).then((txHash) => {
            console.log(`Transaction sent with hash: ${txHash}`);
            alert('Support sent successfully!');
        }).catch((error) => {
            console.error('Error sending support:', error);
            alert('Failed to send support.');
        });

    } catch (error) {
        console.error("Error sending support:", error);
    }
}


