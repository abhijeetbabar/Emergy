//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Emergy.Data.Visual
{
    using System;
    using System.Collections.Generic;
    
    public partial class custompropertyvalue
    {
        public int Id { get; set; }
        public string SerializedValue { get; set; }
        public Nullable<int> CustomProperty_Id { get; set; }
        public int ReportDetails_Id { get; set; }
    
        public virtual customproperty customproperty { get; set; }
        public virtual reportdetail reportdetail { get; set; }
    }
}