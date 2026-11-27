const mongoose = require('mongoose');

const canvasSchema = new mongoose.Schema({

    // Owner of the canvas
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    // Name of the canvas
    name: {
        type: String,
        required: true,
        trim: true,
        default: 'Untitled Canvas',
        maxlength: 100
    },

    // All drawing elements present on the canvas
    elements: {
        type: [mongoose.Schema.Types.Mixed],
        default: []
    },

    // Users with whom this canvas is shared
    shared_with: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            permission: {
                type: String,
                enum: ['view', 'edit'],
                default: 'view'
            },
            sharedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

    // Canvas visibility
    visibility: {
        type: String,
        enum: ['private', 'shared', 'public'],
        default: 'private'
    },

    // Optional canvas description
    description: {
        type: String,
        trim: true,
        maxlength: 500,
        default: ''
    },

    // Soft deletion
    isDeleted: {
        type: Boolean,
        default: false
    },

    // Last time canvas was opened
    lastOpenedAt: {
        type: Date,
        default: null
    }

}, {
    timestamps: true
});

// Indexes for faster queries
canvasSchema.index({ owner: 1, updatedAt: -1 });
canvasSchema.index({ 'shared_with.user': 1 });

const Canvas = mongoose.model('Canvas', canvasSchema);

module.exports = Canvas;
