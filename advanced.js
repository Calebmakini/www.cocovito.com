 // Profile data
        let profileData = {
            name: "caleb makini",
            email: "makinicaleb@gmail.com",
            bio: "entertainer and socialistic",
            avatar: "C:\Users\admin\Pictures\Camera Roll"
        };

        // Notifications data
        const notifications = [
            {
                id: 1,
                user: "John Doe",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                message: "changed password",
                time: "10 minutes ago"
            },
            {
                id: 2,
                user: "Jane Smith",
                avatar: "https://randomuser.me/api/portraits/women/21.jpg",
                message: "viewed your profile",
                time: "25 minutes ago"
            },
            {
                id: 3,
                user: "Mike Johnson",
                avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                message: "liked your video",
                time: "1 hour ago"
            },
            {
                id: 4,
                user: "Sarah Williams",
                avatar: "https://randomuser.me/api/portraits/women/33.jpg",
                message: "started following you",
                time: "2 hours ago"
            },
            {
                id: 5,
                user: "David Brown",
                avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                message: "sent you an invitation",
                time: "5 hours ago"
            },
            {
                id: 6,
                user: "Emily Davis",
                avatar: "https://randomuser.me/api/portraits/women/28.jpg",
                message: "commented on your post",
                time: "8 hours ago"
            },
            {
                id: 7,
                user: "Robert Brown",
                avatar: "https://randomuser.me/api/portraits/men/18.jpg",
                message: "liked your comment",
                time: "1 day ago"
            }
        ];

        // Posts data
        const posts = [
            {
                id: 1,
                user: "John Doe",
                avatar: "",
                content: "Just visited the most amazing place! The views were breathtaking.",
                image: "https://source.unsplash.com/random/600x400?nature",
                time: "2 hours ago",
                likes: 12,
                comments: [
                    {
                        user: "Emily Davis",
                        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
                        text: "Looks amazing! Where is this?",
                        time: "1 hour ago",
                        likes: 3
                    },
                    {
                        user: "Robert Brown",
                        avatar: "https://randomuser.me/api/portraits/men/18.jpg",
                        text: "Beautiful scenery! 😍",
                        time: "30 minutes ago",
                        likes: 5
                    }
                ],
                shares: 2
            },
            {
                id: 2,
                user: "Jane Smith",
                avatar: "https://randomuser.me/api/portraits/women/21.jpg",
                content: "Check out my new video tutorial on web development!",
                time: "5 hours ago",
                likes: 24,
                comments: [],
                shares: 5
            }
        ];

        // Set active navigation item
        function setActiveNav(item) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.add('active');
            });
            if (item) {
                document.querySelector(`#${item}`).classList.add('active');
            }
        }

        // Set active sidebar item
        function setActiveSidebar(item) {
            document.querySelectorAll('.sidebar-item').forEach(sideItem => {
                sideItem.classList.remove('active');
            });
            if (item) {
                document.querySelector(`[data-section="${item}"]`).classList.add('active');
            }
        }
 
        // Show content section
        function showContent(section) {
            document.querySelectorAll('.content-section').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelector(`#${section}-content`).classList.add('active');


            
            // Update page title
            const title = document.querySelector(`#${section}-content .page-title`).textContent;
            document.title = `${title} | Dashboard`;
            



            // Update profile data in view mode
            if (section === 'view-profile' || section === 'update-profile' || section === 'profile-details') {
                updateProfileDisplay();
            
            }}

        // Update profile display across the app
        function updateProfileDisplay() {
            // Update view profile
            document.getElementById('view-name').textContent = profileData.name;
            document.getElementById('view-email').textContent = profileData.email;
            document.getElementById('view-bio').textContent = profileData.bio;
            document.getElementById('profile-avatar-img').src = profileData.avatar;
            
            // Update update profile
            document.getElementById('update-name').textContent = profileData.name;
            document.getElementById('update-email').textContent = profileData.email;
            document.querySelector('#update-profile-content .avatar-upload-preview img').src = profileData.avatar;
            
            // Update header avatar
            document.querySelector('#header-avatar img').src = profileData.avatar;
            
            // Update profile details section
            const profileDetailsAvatar = document.querySelector('#profile-details-content .avatar-upload-preview img');
            if (profileDetailsAvatar) {
                profileDetailsAvatar.src = profileData.avatar;
            }
        }

        // Toggle profile dropdown in sidebar
        document.getElementById('profile-dropdown-btn').addEventListener('click', function() {
            const dropdown = document.getElementById('profile-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        })

 // Toggle chat dropdown in sidebar
        document.getElementById('chat-dropdown-btn').addEventListener('click', function() {
            const dropdown = document.getElementById('chat-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        })

        // Toggle find me- dropdown in sidebar
        document.getElementById('find-dropdown-btn').addEventListener('click', function() {
            const dropdown = document.getElementById('find-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        })


        // Toggle voice call dropdown in sidebar
        document.getElementById('voice-dropdown-btn').addEventListener('click', function() {
            const dropdown = document.getElementById('voice-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        })
// Toggle video call dropdown in sidebar
        document.getElementById('video-dropdown-btn').addEventListener('click', function() {
            const dropdown = document.getElementById('video-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        })

// Toggle live dropdown in sidebar
        document.getElementById('live-dropdown-btn').addEventListener('click', function() {
            const dropdown = document.getElementById('live-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block'}
            })
            // Toggle live dropdown in sidebar
        document.getElementById('acc-dropdown-btn').addEventListener('click', function() {
            const dropdown = document.getElementById('acc-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block'}})
            
            //dropdown in sidebar
        document.getElementById('sett-dropdown-btn').addEventListener('click', function() {
            const dropdown = document.getElementById('sett-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        })
        // Toggle notifications dropdown
        document.getElementById('notification-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = document.getElementById('notifications-dropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
                // Mark notifications as read
                document.getElementById('notification-count').textContent = '0';
                document.getElementById('notification-count').style.display = 'none';
            }
        })

        // Close notifications when clicking elsewhere
        document.addEventListener('click', function() {
            document.getElementById('notifications-dropdown').style.display = 'none';
        });

        // Navigation click handlers
        document.getElementById('nav-home').addEventListener('click', (e) => {
            e.preventDefault();
            setActiveNav('nav-home');
            setActiveSidebar(null);
            document.getElementById('profile-dropdown').style.display = 'none';
            document.getElementById('chat-dropdown').style.display = 'none';
            document.getElementById('find-dropdown').style.display = 'none';
             document.getElementById('voice-dropdown').style.display = 'none';

            showContent('home');
        })

        document.getElementById('nav-watch').addEventListener('click', (e) => {
            e.preventDefault();
            setActiveNav('nav-watch');
            setActiveSidebar(null);
            document.getElementById('profile-dropdown').style.display = 'none';
          
                
            showContent('download'); // Default watch section
        })

        document.getElementById('nav-recognize').addEventListener('click', (e) => {
            e.preventDefault();
            setActiveNav('nav-recognize');
            setActiveSidebar(null);
            document.getElementById('profile-dropdown').style.display = 'none';
            showContent('posts'); // Default recognize me section
        })

        // Sidebar click handlers
        document.querySelectorAll('.sidebar-item:not(#profile-dropdown-btn)').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar(section);
                document.getElementById('profile-dropdown').style.display = 'none';
                showContent(section);
            })
        })
                  // Sidebar click handlers
        document.querySelectorAll('.sidebar-item:not(#acc-dropdown-btn)').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar(section);
                document.getElementById('acc-dropdown').style.display = 'none';
                showContent(section);
            })
        })

  // Sidebar click handlers
        document.querySelectorAll('.sidebar-item:not(#voice-dropdown-btn)').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar(section);
                document.getElementById('voice-dropdown').style.display = 'none';
                showContent(section);
            })
        })
               // Sidebar click handlers
        document.querySelectorAll('.sidebar-item:not(#sett-dropdown-btn)').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar(section);
                document.getElementById('sett-dropdown').style.display = 'none';
                showContent(section);
            })
        })
        // Sidebar click handlers
        document.querySelectorAll('.sidebar-item:not(#live-dropdown-btn)').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar(section);
                document.getElementById('live-dropdown').style.display = 'none';
                showContent(section);
            })
        })
  // Sidebar click handlers
        document.querySelectorAll('.sidebar-item:not(#video-dropdown-btn)').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar(section);
                document.getElementById('video-dropdown').style.display = 'none';
                showContent(section);
            })
        })
        // Sidebar click handlers
        document.querySelectorAll('.sidebar-item:not(#chat-dropdown-btn)').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar(section);
                document.getElementById('chat-dropdown').style.display = 'none';
                showContent(section);
            })
        });

        
       
        // Sidebar click handlers
        document.querySelectorAll('.sidebar-item:not(#find-dropdown-btn)').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar(section);
                document.getElementById('find-dropdown').style.display = 'none';
                showContent(section);
            })
        });

        
        // Profile dropdown click handlers
        document.querySelectorAll('#profile-dropdown a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar('profile');
                showContent(section);
            })
        });

 // chat dropdown click handlers
        document.querySelectorAll('#chat-dropdown a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar('chat');
                showContent(section);
            })
        });
        // Watch dropdown click handlers
        document.querySelectorAll('.dropdown-content a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                const parentId = this.closest('.dropdown').querySelector('a').id;
                
                if (parentId === 'nav-watch') {
                    setActiveNav('nav-watch');
                } else if (parentId === 'nav-recognize') {
                    setActiveNav('nav-recognize');
                }
                
                setActiveSidebar(null);
                document.getElementById('profile-dropdown').style.display = 'none';
                document.getElementById('chat-dropdown').style.display = 'none';
                document.getElementById('voice-dropdown').style.display = 'none';
                
                showContent(section);
            });
        });

        // Quick action click handlers
        document.querySelectorAll('.action-card').forEach(card => {
            card.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                
                // Determine if this is a sidebar feature or dropdown feature
                const sidebarFeatures = ['profile', 'chat', 'find-me', 'voice-call', 'video-call', 'live', 'settings'];
                const profileFeatures = ['view-profile', 'edit-profile', 'update-profile'];
                const voiceFeatures = ['indvc','groupvc'];
                const chatFeatures = ['txt-chat', 'vid-chat', 'aud-chat','lk-chat','dc-chat','cont-chat','chat'];
                 const findFeatures = ['find-Me','hide-find','hist-find','cont-find','emai-find','disp-find','lct-find'];
                const accdFeatures = ['bal','dep','tran','hist'];
                 if (sidebarFeatures.includes(section)) {
                    setActiveNav(null);
                    setActiveSidebar(section);}  
                      else  if (profileFeatures.includes(section)) {
                    setActiveNav(null);
                    setActiveSidebar('profile');}
                     else  if (accdFeatures.includes(section)) {
                    setActiveNav(null);
                    setActiveSidebar('account');}
                     else  if (voiceFeatures.includes(section)) {
                    setActiveNav(null);
                    setActiveSidebar('voice-call');}
                    else if (findFeatures.includes(section)) {
                    setActiveNav(null);
                    setActiveSidebar('Find-me');}
                    else if (chatFeatures.includes(section)) {
                    setActiveNav(null);
                    setActiveSidebar('chat');}
                 else {
                    // It's a dropdown feature
                    if (['download', 'upload', 'save', 'watch-later'].includes(section)) {
                        setActiveNav('nav-watch');
                    } else {
                        setActiveNav('nav-recognize');
                    }
                    setActiveSidebar(null);
                }
                
                document.getElementById('profile-dropdown').style.display = 'none';
                document.getElementById('chat-dropdown').style.display = 'none';
                document.getElementById('find-dropdown').style.display = 'none';
                showContent(section);
            });
        });

            // account dropdown click handlers
        document.querySelectorAll('#acc-dropdown a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                setActiveNav(null);
                setActiveSidebar('account');
                showContent(section);
            });
        });
















        // Avatar upload functionality
        document.getElementById('avatar-upload-input').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('edit-avatar-img').src = event.target.result;
                    // Update profile data immediately for preview
                    profileData.avatar = event.target.result;
                    updateProfileDisplay();
                };
                reader.readAsDataURL(file);
            }
        });

        // Save profile changes
        document.getElementById('save-profile-btn').addEventListener('click', function() {
            profileData.name = document.getElementById('edit-name').value;
            profileData.email = document.getElementById('edit-email').value;
            profileData.bio = document.getElementById('edit-bio').value;
            
            // In a real app, you would save to server here
            alert('Profile saved successfully!');
            showContent('view-profile');
        });

        // Cancel edit
        document.getElementById('cancel-edit-btn').addEventListener('click', function() {
            // Reset form fields
            document.getElementById('edit-name').value = profileData.name;
            document.getElementById('edit-email').value = profileData.email;
            document.getElementById('edit-bio').value = profileData.bio;
            document.getElementById('edit-avatar-img').src = profileData.avatar;
            
            showContent('view-profile');
        });

        // Post actions
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const postId = this.getAttribute('data-post');
                const likeText = this.querySelector('.like-text');
                
                if (likeText.textContent === 'Like') {
                    likeText.textContent = 'Liked';
                    this.innerHTML = '<i class="fas fa-thumbs-up" style="color:#3498db"></i> <span class="like-text">Liked</span>';
                    
                    // Add notification
                    addNotification({
                        user: "You",
                        avatar: profileData.avatar,
                        message: "liked a post",
                        time: DataView()
                    });
                } else {
                    likeText.textContent = 'Like';
                    this.innerHTML = '<i class="fas fa-thumbs-up"></i> <span class="like-text">Like</span>';
                }
            });
        });

        document.querySelectorAll('.comment-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const postId = this.getAttribute('data-post');
                const commentSection = document.getElementById(`comment-section-${postId}`);
                
                if (commentSection.style.display === 'block') {
                    commentSection.style.display = 'none';
                    
                } else {
                    commentSection.style.display = 'block';
                }
            });
        });

        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const postId = this.getAttribute('data-post');
                document.getElementById('share-modal').style.display = 'flex';
            });
        });

        document.querySelectorAll('.follow-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const postId = this.getAttribute('data-post');
                const post = posts.find(p => p.id == postId);
                
                if (this.innerHTML.includes('user-plus')) {
                    this.innerHTML = '<i class="fas fa-user-check"></i> Following';
                    
                    // Add notification
                    addNotification({
                        user: "You",
                        avatar: profileData.avatar,
                        message: `started following ${post.user}`,
                        time: "Just now"
                    });
                } else {
                    this.innerHTML = '<i class="fas fa-user-plus"></i> Follow';
                }
            });
        });

        // Comment actions
        document.querySelectorAll('.like-comment').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.textContent === 'Like') {
                    this.textContent = 'Liked';
                    
                    // Add notification
                    addNotification({
                        user: "You",
                        avatar: profileData.avatar,
                        message: "liked a comment",
                        time: "Just now"
                    });
                } else {
                    this.textContent = 'Like';
                }
            });
        });

        // Submit comment
        document.querySelectorAll('.comment-submit').forEach(btn => {
            btn.addEventListener('click', function() {
                const commentInput = this.previousElementSibling;
                if (commentInput.value.trim() !== '') {
                    // In a real app, you would save the comment to the server
                    alert('Comment posted!');
                    commentInput.value = '';
                    
                    // Add notification
                    addNotification({
                        user: "You",
                        avatar: profileData.avatar,
                        message: "commented on a post",
                        time: "Just now"
                    });
                }
            });
        });

        // Submit post
        document.getElementById('post-submit').addEventListener('click', function() {
            const postContent = document.getElementById('post-content');
            if (postContent.value.trim() !== '') {
                // In a real app, you would save the post to the server
                alert('Post created!');
                postContent.value = '';
                
                // Add notification
                addNotification({
                    user: "You",
                    avatar: profileData.avatar,
                    message: "created a new post",
                    time: "Just now"
                });
            }
        });

        // Emoji picker
        document.getElementById('emoji-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            const picker = document.getElementById('emoji-picker');
            if (picker.style.display === 'block') {
                picker.style.display = 'none';
            } else {
                picker.style.display = 'block';
            }
        });

        document.querySelectorAll('.emoji-option').forEach(emoji => {
            emoji.addEventListener('click', function() {
                const postContent = document.getElementById('post-content');
                postContent.value += this.textContent;
                document.getElementById('emoji-picker').style.display = 'none';
            });
        });

        document.addEventListener('click', function() {
            document.getElementById('emoji-picker').style.display = 'none';
        });

        // Share modal
        document.getElementById('share-modal-close').addEventListener('click', function() {
            document.getElementById('share-modal').style.display = 'none';
        });

        document.querySelector('.share-submit').addEventListener('click', function() {
            document.getElementById('share-modal').style.display = 'none';
            alert('Post shared!');
            
            // Add notification
            addNotification({
                user: "You",
                avatar: profileData.avatar,
                message: "shared a post",
                time: "Just now"
            });
        });

        // Add new notification
        function addNotification(notification) {
            const notificationsList = document.getElementById('notifications-dropdown');
            const notificationItem = document.createElement('div');
            notificationItem.className = 'notification-item';
            notificationItem.innerHTML = `
                <img src="${notification.avatar}" alt="User">
                <div class="content">
                    <div>${notification.user} ${notification.message}</div>
                    <div class="time">${notification.time}</div>
                </div>
            `;
            notificationsList.insertBefore(notificationItem, notificationsList.firstChild);
            
            // Update notification count
            const count = parseInt(document.getElementById('notification-count').textContent) + 1;
            document.getElementById('notification-count').textContent = count;
            document.getElementById('notification-count').style.display = 'grid';
        }

        // Logout click
        document.querySelector('.logout').addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                alert('Logging out...');
                window.location('login.html');
                // Here you would implement actual logout functionality
            }
        });

        // Initialize
        updateProfileDisplay();
        
        // Simulate new notification
        setTimeout(() => {
            document.getElementById('notification-count').textContent = '1';
            document.getElementById('notification-count').style.display = 'flex';
        }, 10000);





        function updateClock() {
      const now = new Date();
      
      // Date formatting
      const dateOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
        
      };
      document.getElementById('dateField').textContent = 
        now.toLocaleDateString('en-US', dateOptions);
      
      // Time components
      const pad = n => n.toString().padStart(2, '0');
      document.getElementById('hours').textContent = pad(now.getHours());
      document.getElementById('minutes').textContent = pad(now.getMinutes());
      document.getElementById('seconds').textContent = pad(now.getSeconds());
    }

    // Precision timing using recursive setTimeout
    function scheduleUpdate() {
      const now = new Date();
      const delay = 1000 - now.getMilliseconds();
      setTimeout(() => {
        updateClock();
        scheduleUpdate();
      }, delay);
    }

    // Initial setup
    updateClock();
    scheduleUpdate();