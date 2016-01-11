﻿using System.Data.Entity.ModelConfiguration;
using Emergy.Data.Models;

namespace Emergy.Data.Configurations
{
    public class ReportConfiguration : EntityTypeConfiguration<Report>
    {
        public ReportConfiguration()
        {
            ToTable("Reports");

            HasMany(x => x.Resources)
              .WithOptional(r => r.Report)
              .HasForeignKey(r => r.ReportId)
              .WillCascadeOnDelete();
        }
    }
}
