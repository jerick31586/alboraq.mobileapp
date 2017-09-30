﻿using Alboraq.MobileApp.Mobile.Helpers;
using Alboraq.MobileApp.Mobile.Models;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;
using Xamarin.Forms;

namespace Alboraq.MobileApp.Mobile.ViewModels
{
    public class LoginViewModel : INotifyPropertyChanged
    {
        private readonly IAccountService _accountService;
        private readonly INavigationService _navigationService;
       

        public LoginViewModel(IAccountService accountService, INavigationService navigationService)
        {
            _accountService = accountService;
            _navigationService = navigationService;
            
        }

        private LoginModel _loginModel;        
        public LoginModel LoginModel
        {
            get { return _loginModel ?? (_loginModel = new LoginModel()); }
            set
            {
                if(_loginModel != value) {
                    _loginModel = value;
                    OnPropertyChanged("LoginModel");
                }
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected void OnPropertyChanged([CallerMemberName]string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }


        public ICommand SignInCommand
        {
            //TODO: REPLACE
            get
            {
                return new Command( ()=> 
                {
                    _navigationService.DisplayAlert("Sample Data", $"{LoginModel.Username} {LoginModel.Password}",
                        "ok", "cancel");
                    //var isSuccess = await _accountService.Login(string.Empty, string.Empty, "password");
                    //if(isSuccess)
                });
            }
        }


    }
}
